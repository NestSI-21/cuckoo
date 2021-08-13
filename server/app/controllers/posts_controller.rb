# frozen_string_literal: true
require 'date'

class PostsController < ActionController::API
  before_action :authenticate_user!

  def index
    @posts = Post.order(created_at: :desc).all
    render(
      json: PostSerializer.new(
        @posts,
        { include: %i[user user.company type] }
      )
    )
  end

  def create
    @post = Post.new(post_params)
    @post.user = current_user
    @flag = 0

    if @post.save
      Slack.configure do |config|
        config.token = ENV['SLACK_OAUTH_TOKEN']
        raise 'Missing ENV[SLACK_OAUTH_TOKEN]!' unless config.token
      end
  
            client = Slack::Web::Client.new
  
      client.auth_test

      @category = Category.find(@post.category_id)

      # Format the message that will be sent to slack
      @slack_cuckoo = @post.title + "\n\n" + @post.description + "\n\n"

      if(@post.location != "")
        @slack_cuckoo += "📍 At: " + @post.location + "\n"
      end 

      if(@post.start_date)
        @slack_cuckoo += "🗓 From: " + @post.start_date.strftime("%d:%m:%Y")
        #Posts that are created on the current day or before wont have a reminder
        if(@post.start_date > DateTime.current.to_date)
          @reminder_day = @post.start_date - 1.day # The reminder is currently set to one day before the start date
          @reminder_time = ENV['SLACK_SCHEDULED_TIME'] # The reminder will always be at this hour - Server runs on a different time zone 1 hour earlier
          @reminder_date_time = DateTime.parse([ @reminder_day, @reminder_time ].join(' '))
          @reminder_date_time = @reminder_date_time.to_time.to_i
          @flag = 1
        end 
      end 

      if(@post.start_time)
        @slack_cuckoo += ", " + @post.start_time.strftime("%H:%M")
      end 
      if(@post.end_date)
        @slack_cuckoo += +"\n🔚 To: "+ @post.end_date.strftime("%d:%m:%Y")
      end 
      
      if(@post.end_time)
        @slack_cuckoo += ", " + @post.end_time.strftime("%H:%M")
      end

      # Sends the schedule message if there is a start date
      if(@flag == 1)
        client.chat_scheduleMessage(channel: @category.slack_channel, text: @slack_cuckoo, post_at: @reminder_date_time)
      end
      #Normal slack message sent when a post is created
      client.chat_postMessage(channel: @category.slack_channel, text: @slack_cuckoo, as_user: true)
      render json: { message: 'A new post was created' }, status: :ok
    else
      render json: { message: 'There was an error!' }, status: :unauthorized
    end

    
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    @post.destroy
    render json: { message: 'A post was deleted successfully' }, status: :ok
  end

  private

  def post_params
    params.require(:post).permit(:type_id, :category_id, :title, :location, :description,
                                 :start_date, :end_date, :start_time, :end_time, images: [])
  end
end

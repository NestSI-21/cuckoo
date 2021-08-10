# frozen_string_literal: true
require 'date'

class PostsController < ActionController::API
  before_action :authenticate_user!

  def index
    @posts = Post.order(created_at: :desc).all
    render json: { posts: @posts }, status: :ok
  end

  def create
    @post = Post.new(post_params)
    @post.user = current_user

    if @post.save
      Slack.configure do |config|
        config.token = ENV['SLACK_OAUTH_TOKEN']
        raise 'Missing ENV[SLACK_OAUTH_TOKEN]!' unless config.token
      end
  
            client = Slack::Web::Client.new
  
      client.auth_test


      @slack_cuckoo = @post.title + "\n\n" + @post.description + "\n\n"

      if(@post.location != "")
        @slack_cuckoo += "At: " + @post.location + "\n"
      end 

      if(@post.start_date)
        @slack_cuckoo += "From: " + @post.start_date.strftime("%d:%m:%Y")
      end 

      if(@post.start_time)
        @slack_cuckoo += ", " + @post.start_time.strftime("%H:%M")
      end 
      if(@post.end_date)
        @slack_cuckoo += +"\nTo: "+ @post.end_date.strftime("%d:%m:%Y")
      end 
      
      if(@post.end_time)
        @slack_cuckoo += ", " + @post.end_time.strftime("%H:%M")
      end

      client.chat_postMessage(channel: , text: @slack_cuckoo, as_user: true)
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
    params.require(:post).permit(:type_id, :category, :title, :location, :description,
                                 :start_date, :end_date, :start_time, :end_time, images: [])
  end
end

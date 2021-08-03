# frozen_string_literal: true


class PostsController < ActionController::API
  before_action :authenticate_user!

  def index
    @posts = Post.order(created_at: :desc).all

    respond_to do |format|
      format.json { render json: @posts }
    end
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user = current_user

    if @post
      render json: { message: 'A new post was created' }, status: :ok
    else
      render json: { message: 'There was an error!' }, status: :unauthorized
    end

    # notifier = Slack::Notifier.new "#{ENV['SLACK_WEBHOOK']}" do
    #     defaults channel: "#nestsi-21-equipa",
    #              username: "cuckoo"
    #   end
      
    #   notifier.ping "Hello default"
      # => will message "Hello default"
      # => to the "#default" channel as 'notifier'

      # Slack.configure do |config|
      #   config.token = ENV['SLACK_OAUTH_TOKEN']
      #   raise 'Missing ENV[SLACK_OAUTH_TOKEN]!' unless config.token
      # end

#       client = Slack::Web::Client.new

# client.auth_test

# client.chat_postMessage(channel: '#nestsi-21-equipa', text: 'Hello World', as_user: true)
  end

  def destroy
    @post = current_user.posts.find(params[:id])
    @post.destroy
    render json: { message: 'A post was deleted successfully' }, status: :ok
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :type_id, :category, :title, :location, :description, :img_url,
                                 :start_date, :end_date, :start_time, :end_time)
  end
end

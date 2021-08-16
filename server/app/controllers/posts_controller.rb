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
    send_message(@post)
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

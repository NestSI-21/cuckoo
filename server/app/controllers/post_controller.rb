# frozen_string_literal: true

require 'rest-client'

class PostController < ActionController::API
  before_action :authenticate_user!

  def index
    @posts = Post.order(created_at: :desc).all

    respond_to do |format|
      format.json { render json: @posts }
    end
  end

  def create
    @post = Post.new(post_params)
    @post.user = current_user

    if @post
      render json: { message: 'A new post was created' }, status: :ok
    else
      render json: { message: 'There was an error!' }, status: :unauthorized
    end
  end

  def post_params
    params.require(:post).permit(:user_id, :type_id, :category, :title, :location, :description, :img_url,
                                 :start_date, :end_date, :start_time, :end_time)
  end
end

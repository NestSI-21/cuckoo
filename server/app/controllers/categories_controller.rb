# frozen_string_literal: true

class CategoriesController < ActionController::API
  before_action :authenticate_user!

  def send_categories
    @categories = Category.all
    render(
      json: CategorySerializer.new(
        @categories,
        { include: [:type] }
      )
    )
  end
end

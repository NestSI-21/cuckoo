# frozen_string_literal: true

class HomeController < ActionController::API
  def index
    render plain: 'Nothing to see here'
  end
end

# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    render plain: 'Nothing to see here'
  end
end

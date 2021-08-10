# frozen_string_literal: true

class Post < ApplicationRecord
  include Rails.application.routes.url_helpers
  belongs_to :user
  has_many_attached :images

  def images_url
    images.map do |image|
      Rails.application.routes.url_helpers.url_for(image)    
    end
  end


end

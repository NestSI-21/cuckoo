# frozen_string_literal: true

class Post < ApplicationRecord
  belongs_to :user
  belongs_to :type
  has_many_attached :images

  # validates_presence_of :start_date, :end_date

  def images_url
    Rails.application.routes.default_url_options = { host: 'localhost:3000', protocol: 'http' }
    images.map do |image|
      Rails.application.routes.url_helpers.url_for(image)
    end
  end
end

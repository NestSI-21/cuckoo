# frozen_string_literal: true

class Company < ApplicationRecord
  has_many :users, dependent: :destroy
  has_one_attached :logo

  def images_url
    Rails.application.routes.default_url_options = { host: 'localhost:3000', protocol: 'http' }
    Rails.application.routes.url_helpers.url_for(logo)
  end
end

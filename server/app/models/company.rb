# frozen_string_literal: true

class Company < ApplicationRecord
  has_many :users, dependent: :destroy
  has_one_attached :logo

  def logo_url
    Rails.application.routes.default_url_options = { host: 'cuckoo-backend.herokuapp.com', protocol: 'https' }
    Rails.application.routes.url_helpers.url_for(logo)
  end
end

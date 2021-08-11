# frozen_string_literal: true

class PostSerializer
  include JSONAPI::Serializer
  attributes :category, :title, :location, :start_date, :end_date, :start_time, :end_time, :images_url
  belongs_to :user
end

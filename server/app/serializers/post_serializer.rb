# frozen_string_literal: true

class PostSerializer
  include JSONAPI::Serializer
  attributes :type_id, :category_id, :title, :location, :description, :start_date, :end_date, :created_at, :images_url
  belongs_to :user
  belongs_to :type
end

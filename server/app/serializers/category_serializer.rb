# frozen_string_literal: true

class CategorySerializer
  include JSONAPI::Serializer
  attributes :name, :slack_channel
  belongs_to :type
end

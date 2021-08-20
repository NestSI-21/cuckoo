# frozen_string_literal: true

class CompanySerializer
  include JSONAPI::Serializer
  attributes :name, :description, :status, :company_url, :images_url
end

class UserSerializer
  include JSONAPI::Serializer
  attributes :name, :image_url, :company_role, :birthday, :company_id, :profile_completed
  belongs_to :company
end

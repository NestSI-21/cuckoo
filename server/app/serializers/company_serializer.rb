class CompanySerializer
  include JSONAPI::Serializer
  attributes :name, :description, :status, :logo
  has_many :users, dependent: :destroy

end

class VisitSerializer < ActiveModel::Serializer
  attributes :id, :date
  has_one :house
  has_one :user
end

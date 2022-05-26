class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :avatar, :username
end

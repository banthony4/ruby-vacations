class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :avatar, :username, :password_digest
end

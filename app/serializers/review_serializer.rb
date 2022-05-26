class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :content, :user_id, :house_id
  
end

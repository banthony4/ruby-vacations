class HouseSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :image, :avg_rating
  
  def avg_rating
    object.reviews.sum(:rating) / object.reviews.size
  end

end

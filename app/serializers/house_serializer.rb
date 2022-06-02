class HouseSerializer < ActiveModel::Serializer
  attributes :id, :name, :per_night, :location, :description, :image, :avg_rating
  
  def avg_rating
    object.reviews.sum(:rating) / object.reviews.size
  end

end

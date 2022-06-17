class HouseReviewsSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :image, :avg_rating, :name
  has_many :reviews
  
  def avg_rating
    object.reviews.sum(:rating) / object.reviews.size
  end
end

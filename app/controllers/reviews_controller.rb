class ReviewsController < ApplicationController

  def index
    render json: Review.all, status: :ok
  end

  def show
    review = Review.find(params[:id])
    render json: review, status: :ok
  end

  def create
    render json: Review.create!(review_params), status: :created
  end

  def update
    review = Review.find(params[:id])
    render json: review.update!(review_params), status: :created
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    head :no_content
  end

  private

  def review_params
    params.permit(:rating, :content, :user_id, :house_id)
  end

end

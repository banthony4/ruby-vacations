class HousesController < ApplicationController

  def index
    render json: House.all, status: :ok
  end

  def show
    house = House.find(params[:id])
    render json: house, status: :ok
  end

  def create
    render json: House.create!(house_params), status: :created
  end

  def update
    house = House.find(params[:id])
    render json: house.update!(house_params), status: :created
  end

  def destroy
    house = House.find(params[:id])
    house.destroy
    head :no_content
  end

  private

  def house_params
    params.permit(:location, :description, :image)
  end
  
end

class VisitsController < ApplicationController

  def index
    render json: Visit.all, status: :ok
  end

  def show
    visit = Visit.find(params[:id])
    render json: visit, status: :ok
  end

  def create
    render json: Visit.create!(visit_params), status: :created
  end

  def update
    visit = Visit.find(params[:id])
    render json: visit.update!(visit_params), status: :created
  end

  def destroy
    visit = Visit.find(params[:id])
    visit.destroy
    head :no_content
  end

  private

  def visit_params
    params.permit(:date, :house_id, :user_id)
  end

end

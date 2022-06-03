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

  def user_visits
    current_user_visits = Visit.joins(:user).where(:user => {:id => params[:id]})
    render json: current_user_visits
  end

  private

  def visit_params
    params.permit(:date, :house_id, :user_id, :start_date, :end_date)
  end

end

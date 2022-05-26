class SessionsController < ApplicationController
  skip_before_action :authorize, only: :login

  def login
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:current_user] = user.id
      render json: user, status: :ok
    else
      render json: { errors: ["invalid username and/or password"] }, status: :unauthorized
    end
  end

  def logout
    session.delete :user_id
    head :no_content
  end

end

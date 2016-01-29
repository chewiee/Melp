class Api::SessionsController < ApplicationController
  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      render json: {}
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user.nil?
      render json: "Incorrect email and/or password."
    else
      login!(@user)
      render "api/users/show"
    end
  end

  def destroy
    logout!
    render json: {}
  end
end

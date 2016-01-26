class Api::SessionsController < ApplicationController
  def new
    @user = User.new
    render "api/session/new.html.erb"
  end

  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if user.nil?
      render json: "Incorrect email and/or password."
    else
      login!(user)
      redirect_to api_user_url(current_user)
    end
  end

  def destroy
    logout!(current_user)
    redirect_to new_session_url
  end
end

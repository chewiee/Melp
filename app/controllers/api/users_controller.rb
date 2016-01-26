class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.username = @user.email if @user.username = ""

    if @user.save
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  def new
    @user = User.new
    render "api/users/new.html.erb"
  end

  def show
    @user = User.find(params[:id])
  end

  private
  def user_params
    params.require(:user).permit(
      :email, :username, :password, :password_confirmation, :address,
      :birthdate, :gender
    )
  end
end

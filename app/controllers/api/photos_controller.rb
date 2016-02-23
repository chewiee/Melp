class Api::PhotosController < ApplicationController
  def create
    @photo = Restaurant.find(params[:restaurant_id]).photos.new(photo_params)
    @photo.user_id = current_user.id
    if @photo.save
      render :show
    else
      render json: {}, status: 422
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:image)
  end
end

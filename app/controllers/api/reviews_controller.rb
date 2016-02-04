class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)
    @review.author_id = current_user.id

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def index
    @reviews = Review.all
  end

  def show
    @review = Review.find(params[:id])
  end

  private
  def review_params
    params.require(:review).permit(:id, :restaurant_id, :star_rating, :price_rating, :body)
  end
end

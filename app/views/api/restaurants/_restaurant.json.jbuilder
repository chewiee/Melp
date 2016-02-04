json.extract!(
  restaurant,
  :id, :name, :address, :city, :zipcode, :phone_number, :website, :review_count
)

if (with_reviews)
  json.reviews do
    json.array!(restaurant.reviews) do |review|
      json.partial! 'api/reviews/review', review: review
    end
  end
end

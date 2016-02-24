json.extract!(
  restaurant,
  :id, :name, :address, :city, :zipcode,
    :phone_number, :website, :review_count
)

json.cuisines do
  json.array!(restaurant.cuisines) do |cuisine|
    json.extract!(cuisine, :cuisine_name)
  end
end

if (with_reviews)
  json.default_photo_url asset_path(restaurant.default_photo.url(:original))
  json.reviews do
    json.array!(restaurant.reviews) do |review|
      json.partial! 'api/reviews/review', review: review
    end
  end
else
  json.default_photo_url asset_path(restaurant.default_photo.url(:list_item))
end

if (with_photos)
  json.photos do
    json.array!(restaurant.photos) do |photo|
      json.partial! 'api/photos/photo', photo: photo
    end
  end
end

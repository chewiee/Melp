json.array!(@restaurants) do |restaurant|
  json.partial!('restaurant', restaurant: restaurant, with_reviews: false, with_photos: false)
end

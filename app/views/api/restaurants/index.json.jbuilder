json.array!(@restaurants) do |restaurant|
  json.partial!('restaurant', restaurant: restaurant, with_reviews: false)
end

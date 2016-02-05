json.total_count @search_results.total_count
json.results do
  json.array! @search_results do |result|
    result = result.searchable

    if result.class == Restaurant
      json.partial!("api/restaurants/restaurant", restaurant: result, with_reviews: false)
    elsif result.class == Review
      json.partial!("api/reviews/review", review: result)
    elsif result.class == User
      json.partial!("api/users/user", user: result)
    end

    json._type result.class.to_s
  end
end

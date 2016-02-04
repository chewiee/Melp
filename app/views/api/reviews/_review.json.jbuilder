json.extract!(
  review,
  :id, :restaurant, :star_rating, :price_rating, :snippet, :updated_at
)

json.author do
  json.partial! 'api/users/user', user: review.author
end

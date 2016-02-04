json.extract!(
  review,
  :id, :star_rating, :price_rating, :snippet, :updated_at
)

json.author do
  json.partial! 'api/users/user', user: review.author
end

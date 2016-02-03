if with_body
  json.extract!(
    review,
    :id, :star_rating, :price_rating, :snippet, :body, :updated_at
  )
else
  json.extract!(
    review,
    :id, :star_rating, :price_rating, :snippet, :updated_at
  )
end

json.author do
  json.partial! 'api/users/user', user: review.author
end

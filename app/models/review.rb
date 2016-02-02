class Review < ActiveRecord::Base
  validates :author, :restaurant, :star_rating, :snippet, presence: true
  validates :snippet, length: { minimum: 20, maximum: 140 }
  validates :body, length: { maximum: 500, allow_nil: true }

  belongs_to(:author, class_name: "User")

  belongs_to :restaurant
  has_many :photos, as: :photoable


end

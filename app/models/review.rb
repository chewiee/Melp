class Review < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:body]

  validates :author, :restaurant, :star_rating, :body, presence: true
  validates :body, length: { minimum: 20, maximum: 500, allow_nil: true }

  belongs_to(:author, class_name: "User")

  belongs_to :restaurant
  has_many :photos, as: :photoable

  def snippet
    body[0..140]
  end

end

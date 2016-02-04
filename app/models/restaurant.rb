class Restaurant < ActiveRecord::Base
  validates :name, :address, presence: true

  has_many :photos, as: :photoable
  has_many :reviews

  def review_count
    reviews.size
  end
end

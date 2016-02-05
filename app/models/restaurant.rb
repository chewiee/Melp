class Restaurant < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:name],
    :using => {
      :tsearch => {:prefix => true}
    }

  validates :name, :address, presence: true

  has_many :photos, as: :photoable
  has_many :reviews

  def review_count
    reviews.size
  end
end

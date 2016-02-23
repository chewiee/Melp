class Restaurant < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:name],
    :using => {
      :tsearch => {:prefix => true}
    }

  validates :name, :address, presence: true

  has_many :photos, as: :photoable
  has_many :reviews

  has_attached_file :default_photo, styles: {
    list_item: "270x150>"
  }
  validates_attachment_content_type(
    :default_photo,
    content_type: /\Aimage\/.*\Z/
  )

  def review_count
    reviews.size
  end
end

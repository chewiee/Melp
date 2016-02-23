class Photo < ActiveRecord::Base
  validates :user_id, presence: true
  belongs_to :photoable, polymorphic: true

  has_attached_file :image

  validates_attachment_content_type(
    :image,
    content_type: /\Aimage\/.*\Z/
  )
end

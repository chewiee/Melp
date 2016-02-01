class Restaurant < ActiveRecord::Base
  validates :name, :address, presence: true

  has_many :photos, as: :photoable
end

class Cuisine < ActiveRecord::Base
  has_many :cuisine_tags
  has_many :restaurants, through: :cuisine_tags

  validates :cuisine_name, presence: true
end

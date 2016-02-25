class Restaurant < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:name],
    :using => {
      :tsearch => {:prefix => true}
    }

  validates :name, :address, presence: true

  has_many :photos, as: :photoable
  has_many :reviews
  has_many :cuisine_tags
  has_many :cuisines, through: :cuisine_tags

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

  def star_rating_unweighted
    ratings = reviews.map{|review| review.star_rating}
    return ratings.inject(:+).to_f / ratings.size
  end

  def star_rating_weighted(current_user)
    weighted_users = Hash.new
    current_user.user_weights.map do |user|
      weighted_users[user.weight_for_user_id] = user.weight
    end

    sum = 0.0
    extra_weight = 0.0
    reviews.each do |review|
      if weighted_users[review.author_id]
        sum += review.star_rating * weighted_users[review.author_id]
        extra_weight += weighted_users[review.author_id] - 1
      else
        sum += review.star_rating
      end
    end

    return sum / (reviews.size + extra_weight)
  end

  def top_review_snippet
    reviews.last.body.truncate(55, separator: ' ')
  end
end

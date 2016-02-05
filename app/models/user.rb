class User < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:username, :city, :gender, :age]

  attr_reader :password

  validates :session_token, presence: true
  validates :email, :username, uniqueness: true, presence: true
  validates :password_digest, presence: { message: "Please enter a password!"}
  validates :password, length: {in: 6..12, allow_nil: true}, confirmation: true
  validates :password_confirmation, presence: { message: "Please confirm your password!"}

  has_many :photos, as: :photoable
  has_many(:reviews, foreign_key: :author_id)

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    token = SecureRandom::urlsafe_base64(16)
    token = User.generate_session_token if User.find_by_session_token(token)
    token
  end

  def onboarded!
    self.onboarded = true;
    self.save;
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def age
    now = Time.now.utc.to_date
    if (self.birthdate)
      return now.year - self.birthdate.year - (self.birthdate.to_date.change(year: now.year) > now ? 1 : 0)
    else
      return "Unknown"
    end
  end

  def review_count
    self.reviews.size
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end

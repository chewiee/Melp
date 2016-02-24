class UserWeight < ActiveRecord::Base
  belongs_to :user
  belongs_to(
    :weight_for_user,
    class_name: "User",
    primary_key: :id,
    foreign_key: :weight_for_user_id)
end

class CreateUserWeights < ActiveRecord::Migration
  def change
    create_table :user_weights do |t|
      t.integer :user_id, null: false, index: true
      t.integer :weight_for_user_id, null: false, index: true
      t.float :weight, default: 1

      t.timestamps null: false
    end
  end
end

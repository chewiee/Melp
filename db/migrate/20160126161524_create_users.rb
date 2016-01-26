class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :address
      t.integer :birthdate
      t.string :gender, limit: 1

      t.timestamps null: false
    end
  end
end

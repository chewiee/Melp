class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false, index: true
      t.integer :restaurant_id, null: false, index: true
      t.integer :star_rating, null: false
      t.integer :price_rating
      t.text :snippet, null: false, length: { minimum: 20, maximum: 140 }
      t.text :body, length: { maximum: 500 }

      t.timestamps null: false
    end
  end
end

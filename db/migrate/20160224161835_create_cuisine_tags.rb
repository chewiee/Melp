class CreateCuisineTags < ActiveRecord::Migration
  def change
    create_table :cuisine_tags do |t|
      t.integer :restaurant_id, index: true
      t.integer :cuisine_id, index: true

      t.timestamps null: false
    end
  end
end

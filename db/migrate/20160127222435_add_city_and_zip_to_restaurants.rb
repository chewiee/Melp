class AddCityAndZipToRestaurants < ActiveRecord::Migration
  def change
    add_column :restaurants, :city, :string, null: false
    add_column :restaurants, :zipcode, :integer, null: false

    add_column :users, :city, :string
    add_column :users, :zipcode, :integer
  end
end

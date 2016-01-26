class ChangeBirthdateToDate < ActiveRecord::Migration
  def change
    remove_column :users, :birthdate
    add_column :users, :birthdate, :date
  end
end

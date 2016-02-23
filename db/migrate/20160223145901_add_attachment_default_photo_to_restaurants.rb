class AddAttachmentDefaultPhotoToRestaurants < ActiveRecord::Migration
  def self.up
    change_table :restaurants do |t|
      t.attachment :default_photo
    end
  end

  def self.down
    remove_attachment :restaurants, :default_photo
  end
end

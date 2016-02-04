class RemoveSnippetFromReviews < ActiveRecord::Migration
  def change
    remove_column :reviews, :snippet
  end
end

class RemoveCategoryFromPosts < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :category
    add_reference :posts, :category, foreign_key: true
  end
end

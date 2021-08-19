class DeleteImgUrl < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :img_url
  end
end

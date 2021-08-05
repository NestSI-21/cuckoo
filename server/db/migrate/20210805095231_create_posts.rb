class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.references :user, null: false, foreign_key: true
      t.references :type, null: false, foreign_key: true
      t.string :category, null: false
      t.string :title, null: false 
      t.string :location
      t.string :description
      t.date   :start_date
      t.date   :end_date 
      t.time   :start_time
      t.time   :end_time


      t.timestamps
    end
  end
end

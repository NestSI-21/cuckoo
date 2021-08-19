class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.references :type, null: false, foreign_key: true
      t.string :name, null: false 
      t.string :slack_channel, null: false

      t.timestamps
    end
  end
end

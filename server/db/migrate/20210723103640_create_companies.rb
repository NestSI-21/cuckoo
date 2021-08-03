class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :name
      t.text :description
      t.string :status
      t.string :logo

      t.timestamps
    end
  end
end

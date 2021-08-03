class AddProfileInformationToUser < ActiveRecord::Migration[6.1]
  def change
    add_reference :users, :company, foreign_key: true
    add_column :users, :company_role, :string
    add_column :users, :birthday, :date
    add_column :users, :profile_completed, :boolean, default: false
    add_column :users, :remember_created_at, :datetime
  end
end

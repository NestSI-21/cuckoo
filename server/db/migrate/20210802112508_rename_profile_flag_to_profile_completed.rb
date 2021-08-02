class RenameProfileFlagToProfileCompleted < ActiveRecord::Migration[6.1]
  def change
    rename_column :users, :profile_flag, :profile_completed
  end
end

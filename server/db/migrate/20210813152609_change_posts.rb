class ChangePosts < ActiveRecord::Migration[6.1]
  def up
    change_column(:posts, :start_date, :datetime)
    change_column(:posts, :end_date, :datetime)

    remove_column(:posts, :start_time)
    remove_column(:posts, :end_time)
  end

  def down
    add_column(:posts, :start_time, :date)
    add_column(:posts, :end_time, :date)

    change_column(:posts, :start_date, :date)
    change_column(:posts, :end_date, :date)
  end
end

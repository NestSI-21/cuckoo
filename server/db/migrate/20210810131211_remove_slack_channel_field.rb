class RemoveSlackChannelField < ActiveRecord::Migration[6.1]
  def change
    remove_column :types, :slack_channel
  end
end

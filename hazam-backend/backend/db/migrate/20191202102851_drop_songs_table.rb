class DropSongsTable < ActiveRecord::Migration[6.0]
  def up
    drop_table :songs
  end
end

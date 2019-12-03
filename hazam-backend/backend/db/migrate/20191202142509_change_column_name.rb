class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :songs, :hash, :song_hash
  end
end

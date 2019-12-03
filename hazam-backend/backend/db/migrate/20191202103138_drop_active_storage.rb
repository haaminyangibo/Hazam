class DropActiveStorage < ActiveRecord::Migration[6.0]
  def up
    drop_table :active_storage_blobs
  end
end

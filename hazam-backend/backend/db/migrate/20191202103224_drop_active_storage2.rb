class DropActiveStorage2 < ActiveRecord::Migration[6.0]
  def up
    drop_table :active_storage_attachments
  end
end

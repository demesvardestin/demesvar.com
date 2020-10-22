class AddAdminIdToSeries < ActiveRecord::Migration[5.0]
  def change
    add_column :series, :admin_id, :integer
    add_column :series, :live, :boolean
  end
end

class AddMetadataToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :github, :string
    add_column :projects, :website, :string
  end
end

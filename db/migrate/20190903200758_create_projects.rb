class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :tags
      t.string :category

      t.timestamps
    end
    
    add_column :articles, :project_id, :integer
  end
end

class CreateSeries < ActiveRecord::Migration[5.0]
  def change
    create_table :series do |t|
      t.string :name
      t.text :description
      t.string :slug

      t.timestamps
    end
    
    add_column :articles, :series_id, :integer
  end
end

class CreateCommentables < ActiveRecord::Migration[5.0]
  def change
    create_table :commentables do |t|
      t.integer :object_id

      t.timestamps
    end
  end
end

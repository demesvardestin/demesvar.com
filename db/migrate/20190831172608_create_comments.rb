class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.text :content
      t.boolean :flagged
      t.integer :article_id
      t.string :image
      t.string :commenter_name
      t.string :commenter_email

      t.timestamps
    end
  end
end

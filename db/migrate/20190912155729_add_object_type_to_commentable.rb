class AddObjectTypeToCommentable < ActiveRecord::Migration[5.0]
  def change
    add_column :commentables, :object_type, :string
    add_column :comments, :commentable_id, :integer
    remove_column :comments, :article_id, :integer
  end
end

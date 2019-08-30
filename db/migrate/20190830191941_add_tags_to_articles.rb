class AddTagsToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :tags, :string
  end
end

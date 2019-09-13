class RemoveCategoryIdFromArticles < ActiveRecord::Migration[5.0]
  def change
    remove_column :articles, :category_id, :integer
    add_column :articles, :category_name, :string
  end
end

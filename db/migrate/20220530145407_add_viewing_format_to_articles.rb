class AddViewingFormatToArticles < ActiveRecord::Migration[5.0]
  def change
    add_column :articles, :viewing_format, :string, default: "html"
    add_column :articles, :file_name, :string, default: ""
  end
end

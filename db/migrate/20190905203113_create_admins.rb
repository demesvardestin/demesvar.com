class CreateAdmins < ActiveRecord::Migration[5.0]
  def change
    create_table :admins do |t|
      t.string :first_name
      t.string :last_name
      t.text :bio
      t.string :facebook
      t.string :twitter
      t.string :linkedin
      t.string :instagram
      t.string :email
      t.string :github
      t.string :website

      t.timestamps
    end
  end
end

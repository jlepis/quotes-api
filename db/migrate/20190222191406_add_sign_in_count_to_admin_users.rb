class AddSignInCountToAdminUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :admin_users, :sign_in_count, :integer
  end
end

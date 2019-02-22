class AddTrackableToAdminUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :admin_users, :current_sign_in_at, :datetime
    add_column :admin_users, :last_sign_in_at, :datetime
    add_column :admin_users, :current_sign_in_ip, :string
    add_column :admin_users, :last_sign_in_ip, :string
  end
end

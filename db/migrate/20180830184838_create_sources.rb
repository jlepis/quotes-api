class CreateSources < ActiveRecord::Migration[5.2]
  def change
    create_table :sources do |t|
      t.string :title
      t.text :description
      t.string :created_by

      t.timestamps
    end
  end
end

class CreateImages < ActiveRecord::Migration[7.1]
  def change
    create_table :images do |t|
      t.string :image_url
      t.references :rental_property, null: true, foreign_key: true
      t.references :rental_application, null: true, foreign_key: true
      t.integer :uploaded_by_id, null: false

      t.timestamps
    end

    add_foreign_key :images, :users, column: :uploaded_by_id
  end
end

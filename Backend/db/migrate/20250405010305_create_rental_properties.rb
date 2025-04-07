class CreateRentalProperties < ActiveRecord::Migration[7.1]
  def change
    create_table :rental_properties do |t|
      t.string :title
      t.text :description
      t.string :address
      t.integer :sq_feet
      t.integer :bedrooms
      t.integer :bathrooms
      t.string :property_types
      t.decimal :fees
      t.boolean :utilities_included
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

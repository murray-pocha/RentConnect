class CreateRentalApplications < ActiveRecord::Migration[7.1]
  def change
    create_table :rental_applications do |t|
      t.string :status
      t.references :user, null: false, foreign_key: true
      t.references :rental_property, null: false, foreign_key: true

      t.timestamps
    end
  end
end

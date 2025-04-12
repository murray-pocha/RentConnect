class AddPropertyIdToRentalApplications < ActiveRecord::Migration[7.1]
  def change
    add_column :rental_applications, :property_id, :integer
  end
end

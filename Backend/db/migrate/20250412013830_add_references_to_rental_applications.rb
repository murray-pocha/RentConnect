class AddReferencesToRentalApplications < ActiveRecord::Migration[7.1]
  def change
    add_column :rental_applications, :references, :text
  end
end

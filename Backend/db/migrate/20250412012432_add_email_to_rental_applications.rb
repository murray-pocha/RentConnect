class AddEmailToRentalApplications < ActiveRecord::Migration[7.1]
  def change
    add_column :rental_applications, :email, :string
  end
end

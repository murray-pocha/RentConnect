class AddPhoneNumderToRentalApplications < ActiveRecord::Migration[7.1]
  def change
    add_column :rental_applications, :phone_number, :string
  end
end

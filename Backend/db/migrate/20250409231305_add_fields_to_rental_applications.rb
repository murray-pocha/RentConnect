class AddFieldsToRentalApplications < ActiveRecord::Migration[7.1]
  def change
    add_column :rental_applications, :first_name, :string
    add_column :rental_applications, :last_name, :string
    add_column :rental_applications, :age, :integer
    add_column :rental_applications, :current_address, :string
    add_column :rental_applications, :province, :string
    add_column :rental_applications, :city, :string
    add_column :rental_applications, :country, :string
    add_column :rental_applications, :employment_status, :string
    add_column :rental_applications, :employer_name, :string
    add_column :rental_applications, :years_working_at_employer, :integer
    add_column :rental_applications, :payment_type, :string
  end
end

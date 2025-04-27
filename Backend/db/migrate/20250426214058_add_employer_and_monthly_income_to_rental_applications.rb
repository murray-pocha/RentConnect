class AddEmployerAndMonthlyIncomeToRentalApplications < ActiveRecord::Migration[7.1]
  def change
    add_column :rental_applications, :employer, :string
    add_column :rental_applications, :monthly_income, :integer
  end
end

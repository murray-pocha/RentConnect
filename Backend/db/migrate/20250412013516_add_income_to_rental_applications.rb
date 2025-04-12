class AddIncomeToRentalApplications < ActiveRecord::Migration[7.1]
  def change
    add_column :rental_applications, :income, :integer
  end
end

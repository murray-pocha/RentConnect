class AddLatitudeAndLongitudeToRentalProperties < ActiveRecord::Migration[7.1]
  def change
    add_column :rental_properties, :latitude, :float
    add_column :rental_properties, :longitude, :float
  end
end

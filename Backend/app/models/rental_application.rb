class RentalApplication < ApplicationRecord
  belongs_to :user
  belongs_to :rental_property
end

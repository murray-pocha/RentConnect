class RentalApplication < ApplicationRecord
  belongs_to :user
  belongs_to :rental_property
  has_many :images, dependent: :destroy
  has_many_attached :documents
end

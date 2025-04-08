class Image < ApplicationRecord
  belongs_to :rental_property
  belongs_to :rental_application
end

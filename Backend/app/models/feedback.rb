class Feedback < ApplicationRecord
  belongs_to :author, class_name: 'User'
  belongs_to :recipient, class_name: 'User'

  validates :rating, presence: true, inclusion: { in: 1..5}
end

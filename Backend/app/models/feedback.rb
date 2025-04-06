class Feedback < ApplicationRecord
  belongs_to :author
  belongs_to :recipient
end

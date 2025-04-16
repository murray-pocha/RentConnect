class AddRatingToFeedbacks < ActiveRecord::Migration[7.1]
  def change
    add_column :feedbacks, :rating, :integer
  end
end

class CreateSubscriptions < ActiveRecord::Migration[7.1]
  def change
    create_table :subscriptions do |t|
      t.string :plan
      t.boolean :active
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

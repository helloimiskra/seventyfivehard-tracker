class CreateAttempts < ActiveRecord::Migration[6.0]
  def change
    create_table :attempts do |t|
      t.boolean :completed
      t.datetime :startdate
      t.integer :user_id

      t.timestamps
    end
  end
end

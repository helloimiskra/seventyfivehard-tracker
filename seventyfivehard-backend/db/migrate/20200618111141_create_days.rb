class CreateDays < ActiveRecord::Migration[6.0]
  def change
    create_table :days do |t|
      t.boolean :diet
      t.boolean :workout_one
      t.boolean :workout_two
      t.boolean :no_alcohol
      t.boolean :no_cheatmeal
      t.boolean :progress_pic
      t.string :progress_pic_src
      t.boolean :drank_water
      t.boolean :book_read
      t.string :book_info
      t.boolean :day_complete
      t.integer :attempt_id

      t.timestamps
    end
  end
end

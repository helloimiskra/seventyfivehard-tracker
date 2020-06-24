class DaySerializer
  include FastJsonapi::ObjectSerializer
  attributes :diet, :workout_one, :workout_two, :no_alcohol, :no_cheatmeal, :progress_pic, :progress_pic_src, :drank_water, :book_read, :book_info, :day_complete, :user_id, :id, :created_at

  belongs_to :user
end

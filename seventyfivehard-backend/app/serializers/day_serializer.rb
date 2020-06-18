class DaySerializer
  include FastJsonapi::ObjectSerializer
  attributes :diet, :workout_one, :workout_two, :no_alcohol, :no_cheatmeal, :progress_pic, :progress_pic_src, :drank_water, :book_read, :book_info, :day_complete, :attempt_id

  belongs_to :attempt
end

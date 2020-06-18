class Day < ApplicationRecord
    belongs_to :attempt

    def update_day_complete
        if self.diet && self.workout_one && self.workout_two && self.no_alcohol &&  self.no_cheatmeal && self.progress_pic && self.drank_water && self.book_read === true
            self.day_complete = true
            self.save
        end
        
    end

    
end

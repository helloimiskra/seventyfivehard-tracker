class Attempt < ApplicationRecord
    has_many :days
    validates :startdate, presence: true

    def attempt_successful
        if self.days.length === 75
            self.completed = true
            self.save
        end
    end

end

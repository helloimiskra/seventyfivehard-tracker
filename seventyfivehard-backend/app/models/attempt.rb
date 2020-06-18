class Attempt < ApplicationRecord
    has_many :days
    validates: :start_date, presence: true
end

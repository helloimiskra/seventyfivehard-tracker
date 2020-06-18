class Attempt < ApplicationRecord
    has_many :days
    validates :startdate, presence: true
end

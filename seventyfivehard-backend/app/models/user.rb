class User < ApplicationRecord
    has_many :attempts
    has_many :days
    validates :name, presence: true
    validates :username, presence: true
    
end

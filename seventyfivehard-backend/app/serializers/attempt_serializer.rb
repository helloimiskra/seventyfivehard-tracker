class AttemptSerializer
  include FastJsonapi::ObjectSerializer
  attributes :startdate, :user_id, :completed

  belongs_to :user
  has_many :days
end

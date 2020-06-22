class AttemptSerializer
  include FastJsonapi::ObjectSerializer
  attributes :startdate, :user_id, :completed, :id

  belongs_to :user
  has_many :days
end

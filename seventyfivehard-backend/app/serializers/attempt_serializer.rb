class AttemptSerializer
  include FastJsonapi::ObjectSerializer
  attributes :startdate, :user_id, :completed, :id, :created_at

  belongs_to :user
  has_many :days
end

class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :username, :goals, :id, :attempts, :days
  has_many :attempts
  
  
end

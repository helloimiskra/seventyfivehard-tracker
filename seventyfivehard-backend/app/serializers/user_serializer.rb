class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :username, :goals, :id
  has_many :days
  
  
end

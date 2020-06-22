class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :username, :goals, :id, :attempts
  has_many :attempts
  
end

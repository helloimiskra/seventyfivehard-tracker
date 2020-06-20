class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :username, :goals
  has_many :attempts
  
end

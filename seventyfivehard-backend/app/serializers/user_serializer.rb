class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :username, :goals
end

Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :days
      resources :attempts
      resources :users
    end
  end
end



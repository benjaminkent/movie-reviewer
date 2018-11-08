Rails.application.routes.draw do
  namespace :api do
    resources :movies, only: [:index, :show]
  end
  
  get "admin", to: "admin#index"

  scope :admin do
    resources :movies
    resources :categories
  end
end

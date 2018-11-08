Rails.application.routes.draw do
  get 'admin/index'
  scope :admin do
    resources :movies
    resources :categories
  end
end

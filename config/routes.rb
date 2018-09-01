Rails.application.routes.draw do

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  resources :sources do
    resources :quotes
  end
  # random quote endpoint
  get 'random/quote', to: 'quotes#random_quote'
  # authentication action
  post 'auth/login', to: 'authentication#authenticate'
  # signup
  post 'signup', to: 'users#create'
end

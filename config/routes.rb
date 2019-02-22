Rails.application.routes.draw do
  root to: 'quotes#random_quote'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  resources :sources do
    resources :quotes
  end
  # random quote endpoint
  get 'random/quote', to: 'quotes#random_quote'

  # quote endpoint to list all quotes
  get 'quotes', to: 'quotes#list'

  # authentication action
  post 'auth/login', to: 'authentication#authenticate'
  # signup
  post 'signup', to: 'users#create'

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end

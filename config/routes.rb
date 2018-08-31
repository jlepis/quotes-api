Rails.application.routes.draw do
  Rails.application.routes.draw do
    resources :sources do
      resources :quotes
    end

    # random quote endpoint
    get 'random/quote', to: 'quotes#random_quote'
  end
end

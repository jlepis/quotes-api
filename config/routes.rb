Rails.application.routes.draw do
  Rails.application.routes.draw do
    resources :sources do
      resources :quotes
    end
  end
end

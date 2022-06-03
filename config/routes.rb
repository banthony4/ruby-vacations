Rails.application.routes.draw do
  
  resources :reviews
  resources :visits, only: [:index, :show, :create]
  resources :houses, only: [:index, :show]
  resources :users, only: [:index, :show, :create]

  get '/authorized_user', to: 'users#show'

  get '/visits/by_user/:id', to: 'visits#user_visits'
  
  get '/reviews/by_user/:id', to: 'reviews#user_reviews' 


  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

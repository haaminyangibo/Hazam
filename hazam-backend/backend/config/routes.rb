Rails.application.routes.draw do
 
  resources :songs
  get 's3/direct_post'
  # resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  get '/users', to: 'users#index'
  post '/users', to: 'users#create'
  get '/users/:id', to: 'users#show'
  post '/signin', to: 'users#signin'
  get '/validate', to: 'users#validate'

  get '/songs', to: 'songs#index'
  post '/songs', to: 'songs#create'
  get '/songs/:id', to: 'songs#show'



end

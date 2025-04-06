Rails.application.routes.draw do
    devise_for :users, controllers: { registrations: 'users/registrations' }
  resources :users, only: [:show]
  resources :rental_properties 
     # your custom UsersController for profile viewing remains separate
    # other routes...
  end
  

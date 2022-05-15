Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/registrations'
  }

  # get "users/sign_out", to: "categories#index"


  resources :materials

  get 'categories/index', as: 'user_root'






  root "categories#index"
  get "/categories" , to: "categories#index"

  post "/materials/new", to: "materials#create"


  get "/qqq"                         , to: 'categories#qqq'
  get "/qqq/get_categories"          , to: "categories#get_categories"
  
 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

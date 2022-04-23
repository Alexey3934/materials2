Rails.application.routes.draw do
  # resources :articles
  
  # get "/materials/new" , to: 'materials#new'
  # post "/materials/new" , to: 'materials#create'
  resources :materials
  # root 'frame1#show'
  
  get "/"                                             ,  to: 'frame1#show1'
  get "/qqq/:subcategory1"                            ,  to: 'frame1#show2'
  get "/qqq/:subcategory1/:subcategory2"              ,  to: 'frame1#show3'
  get "/qqq/:subcategory1/:subcategory2/:subcategory3",  to: 'frame1#show4'

  get "/qqq"                                          ,  to: 'frame1#qqq'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  
  # Defines the root path route ("/")
  # root "articles#index"
end





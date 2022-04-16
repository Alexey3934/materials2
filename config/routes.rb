Rails.application.routes.draw do
  # root 'frame1#show'

  get "/"          , to: 'frame1#show'
  get "/:category" , to: 'frame1#show2'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
 
  
  # Defines the root path route ("/")
  # root "articles#index"
end

Rails.application.routes.draw do
  # get 'category/show3'
  # get 'category/show4'
  # root 'frame1#show'

  get "/"                                         ,  to: 'frame1#show1'
  get "/:subcategory1"                            ,  to: 'frame1#show2'
  get "/:subcategory1/:subcategory2"              ,  to: 'frame1#show3'
  get "/:subcategory1/:subcategory2/:subcategory3",  to: 'frame1#show4'


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
 
  
  # Defines the root path route ("/")
  # root "articles#index"
end

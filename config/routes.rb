Rails.application.routes.draw do
    get '/blog', to: 'articles#index'
    get '/blog/create', to: 'articles#new'
    get '/blog/:slug', to: 'articles#show'
    resources :articles
    
    root "pages#home"
end

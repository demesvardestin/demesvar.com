Rails.application.routes.draw do
  devise_for :admins
    namespace :blog do
        get '/filter_by_category', to: 'articles#filter_by_category'
        get '/', to: 'articles#index'
        get '/create', to: 'articles#new'
        get '/:slug', to: 'articles#show'
        
        resources :articles
        resources :comments, except: [:show, :index, :edit]
    end
    
    namespace :project do
        get '/list', to: 'projects#index'
        get '/new', to: 'projects#new'
        get '/:slug', to: 'projects#show'
    end
    
    resources :comments, :projects
    get '/preview_post', to: 'blog/articles#preview_post'
    get '/about', to: 'pages#about'
    
    root "pages#home"
end

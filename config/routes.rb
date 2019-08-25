Rails.application.routes.draw do
    get '/blog/:slug', to: 'articles#show'
    get '/blog', to: 'articles#index'
    root "pages#home"
end

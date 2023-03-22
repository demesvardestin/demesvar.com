{"changed":true,"filter":false,"title":"routes.rb","tooltip":"/config/routes.rb","value":"Rails.application.routes.draw do\n    \n    mount PdfjsViewer::Rails::Engine => \"/pdfjs\", as: 'pdfjs'\n    \n    devise_for :admins, :controllers => { :registrations => \"authentication/admins/registrations\" }\n    devise_scope :admin do\n        get '/login', to: 'devise/sessions#new'\n        get '/password/settings', to: 'admins/registrations#edit'\n        get '/retrieve/password', to: 'devise/passwords#new'\n    end\n    authenticated :admin do\n        root 'admins#dashboard', as: :authenticated_user_root\n        get '/profile', to: 'admins#profile'\n    end\n    \n    namespace :blog do\n        get '/filter_by_category', to: 'articles#filter_by_category'\n        get '/', to: 'articles#index'\n        get '/create', to: 'articles#new'\n        get '/category/:category', to: 'articles#show_category', as: 'show_category'\n        get '/tagged/:tag', to: 'articles#show_tag', as: 'show_tag'\n        get '/article/:id/edit', to: 'articles#edit'\n        get '/article/:slug/:id', to: 'articles#show', as: \"show_article\"\n        get '/article/:slug/:id/edit', to: 'articles#edit'\n        \n        resources :articles\n    end\n    \n    namespace :project do\n        get '/list', to: 'projects#index'\n        get '/new', to: 'projects#new'\n        get '/tagged/:tag', to: 'projects#show_tag', as: 'show_tag'\n        get '/:slug', to: 'projects#show', as: \"show_project\"\n        get '/:slug/edit', to: 'projects#edit'\n        get '/:project_id/add-article', to: 'projects#add_article', as: \"add_article\"\n        resources :projects\n    end\n    \n    namespace :freelance do\n        get '/', to: 'freelance#index'\n        get '/:name', to: 'freelance#show'\n    end\n    \n    resources :comments, except: [:show, :index, :edit]\n    resources :admins, only: [:create, :update]\n    resources :series, only: [:create, :update, :destroy, :show]\n    \n    get '/pdf/:file_name', to: 'blog/articles#show_pdf'\n    get '/a/:id', to: 'blog/articles#article_redirect_from_short_url'\n    get '/preview_post', to: 'blog/articles#preview_post'\n    get '/about', to: 'pages#about'\n    get '/home', to: 'pages#home'\n    get '/latest', to: 'pages#latest'\n    get '/series', to: 'series#index'\n    get '/fitness', to: 'fitness#index'\n    get '/new-series', to: 'series#new'\n    get '/s/:slug', to: 'series#show', as: 'show_series'\n    get '/s/:slug/edit', to: 'series#edit'\n    \n    root \"pages#home\"\nend","undoManager":{"mark":47,"position":47,"stack":[[{"start":{"row":54,"column":42},"end":{"row":55,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":55,"column":0},"end":{"row":55,"column":4},"action":"insert","lines":["    "]},{"start":{"row":55,"column":4},"end":{"row":55,"column":5},"action":"insert","lines":["g"]},{"start":{"row":55,"column":5},"end":{"row":55,"column":6},"action":"insert","lines":["e"]},{"start":{"row":55,"column":6},"end":{"row":55,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":55,"column":7},"end":{"row":55,"column":8},"action":"insert","lines":[" "],"id":3}],[{"start":{"row":55,"column":8},"end":{"row":55,"column":10},"action":"insert","lines":["''"],"id":4}],[{"start":{"row":55,"column":9},"end":{"row":55,"column":10},"action":"insert","lines":["/"],"id":5},{"start":{"row":55,"column":10},"end":{"row":55,"column":11},"action":"insert","lines":["p"]},{"start":{"row":55,"column":11},"end":{"row":55,"column":12},"action":"insert","lines":["h"]},{"start":{"row":55,"column":12},"end":{"row":55,"column":13},"action":"insert","lines":["o"]},{"start":{"row":55,"column":13},"end":{"row":55,"column":14},"action":"insert","lines":["t"]},{"start":{"row":55,"column":14},"end":{"row":55,"column":15},"action":"insert","lines":["o"]},{"start":{"row":55,"column":15},"end":{"row":55,"column":16},"action":"insert","lines":["g"]}],[{"start":{"row":55,"column":16},"end":{"row":55,"column":17},"action":"insert","lines":["r"],"id":6},{"start":{"row":55,"column":17},"end":{"row":55,"column":18},"action":"insert","lines":["a"]},{"start":{"row":55,"column":18},"end":{"row":55,"column":19},"action":"insert","lines":["p"]},{"start":{"row":55,"column":19},"end":{"row":55,"column":20},"action":"insert","lines":["h"]},{"start":{"row":55,"column":20},"end":{"row":55,"column":21},"action":"insert","lines":["y"]}],[{"start":{"row":55,"column":22},"end":{"row":55,"column":23},"action":"insert","lines":[","],"id":7}],[{"start":{"row":55,"column":23},"end":{"row":55,"column":24},"action":"insert","lines":[" "],"id":8},{"start":{"row":55,"column":24},"end":{"row":55,"column":25},"action":"insert","lines":["t"]},{"start":{"row":55,"column":25},"end":{"row":55,"column":26},"action":"insert","lines":["o"]},{"start":{"row":55,"column":26},"end":{"row":55,"column":27},"action":"insert","lines":[":"]}],[{"start":{"row":55,"column":27},"end":{"row":55,"column":28},"action":"insert","lines":[" "],"id":9}],[{"start":{"row":55,"column":28},"end":{"row":55,"column":30},"action":"insert","lines":["''"],"id":10}],[{"start":{"row":55,"column":29},"end":{"row":55,"column":30},"action":"insert","lines":["p"],"id":11},{"start":{"row":55,"column":30},"end":{"row":55,"column":31},"action":"insert","lines":["a"]},{"start":{"row":55,"column":31},"end":{"row":55,"column":32},"action":"insert","lines":["g"]},{"start":{"row":55,"column":32},"end":{"row":55,"column":33},"action":"insert","lines":["e"]},{"start":{"row":55,"column":33},"end":{"row":55,"column":34},"action":"insert","lines":["s"]},{"start":{"row":55,"column":34},"end":{"row":55,"column":35},"action":"insert","lines":["#"]}],[{"start":{"row":55,"column":35},"end":{"row":55,"column":36},"action":"insert","lines":["p"],"id":12},{"start":{"row":55,"column":36},"end":{"row":55,"column":37},"action":"insert","lines":["h"]},{"start":{"row":55,"column":37},"end":{"row":55,"column":38},"action":"insert","lines":["o"]},{"start":{"row":55,"column":38},"end":{"row":55,"column":39},"action":"insert","lines":["t"]},{"start":{"row":55,"column":39},"end":{"row":55,"column":40},"action":"insert","lines":["o"]},{"start":{"row":55,"column":40},"end":{"row":55,"column":41},"action":"insert","lines":["g"]},{"start":{"row":55,"column":41},"end":{"row":55,"column":42},"action":"insert","lines":["r"]},{"start":{"row":55,"column":42},"end":{"row":55,"column":43},"action":"insert","lines":["a"]},{"start":{"row":55,"column":43},"end":{"row":55,"column":44},"action":"insert","lines":["p"]},{"start":{"row":55,"column":44},"end":{"row":55,"column":45},"action":"insert","lines":["h"]},{"start":{"row":55,"column":45},"end":{"row":55,"column":46},"action":"insert","lines":["y"]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":4},"action":"insert","lines":["    "],"id":13}],[{"start":{"row":1,"column":4},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":14},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":61},"action":"insert","lines":["mount PdfjsViewer::Rails::Engine => \"/pdfjs\", as: 'pdfjs'"],"id":15}],[{"start":{"row":56,"column":47},"end":{"row":57,"column":0},"action":"insert","lines":["",""],"id":16},{"start":{"row":57,"column":0},"end":{"row":57,"column":4},"action":"insert","lines":["    "]},{"start":{"row":57,"column":4},"end":{"row":57,"column":5},"action":"insert","lines":["g"]},{"start":{"row":57,"column":5},"end":{"row":57,"column":6},"action":"insert","lines":["e"]},{"start":{"row":57,"column":6},"end":{"row":57,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":57,"column":7},"end":{"row":57,"column":8},"action":"insert","lines":[" "],"id":17}],[{"start":{"row":57,"column":8},"end":{"row":57,"column":10},"action":"insert","lines":["''"],"id":18}],[{"start":{"row":57,"column":9},"end":{"row":57,"column":10},"action":"insert","lines":["/"],"id":19},{"start":{"row":57,"column":10},"end":{"row":57,"column":11},"action":"insert","lines":["t"]},{"start":{"row":57,"column":11},"end":{"row":57,"column":12},"action":"insert","lines":["h"]},{"start":{"row":57,"column":12},"end":{"row":57,"column":13},"action":"insert","lines":["e"]},{"start":{"row":57,"column":13},"end":{"row":57,"column":14},"action":"insert","lines":["s"]},{"start":{"row":57,"column":14},"end":{"row":57,"column":15},"action":"insert","lines":["i"]},{"start":{"row":57,"column":15},"end":{"row":57,"column":16},"action":"insert","lines":["s"]}],[{"start":{"row":57,"column":17},"end":{"row":57,"column":18},"action":"insert","lines":[","],"id":20}],[{"start":{"row":57,"column":18},"end":{"row":57,"column":19},"action":"insert","lines":[" "],"id":21}],[{"start":{"row":57,"column":19},"end":{"row":57,"column":20},"action":"insert","lines":["t"],"id":22},{"start":{"row":57,"column":20},"end":{"row":57,"column":21},"action":"insert","lines":["o"]},{"start":{"row":57,"column":21},"end":{"row":57,"column":22},"action":"insert","lines":[":"]}],[{"start":{"row":57,"column":22},"end":{"row":57,"column":23},"action":"insert","lines":[" "],"id":23}],[{"start":{"row":57,"column":23},"end":{"row":57,"column":25},"action":"insert","lines":["''"],"id":24}],[{"start":{"row":57,"column":24},"end":{"row":57,"column":25},"action":"insert","lines":["/"],"id":25}],[{"start":{"row":57,"column":24},"end":{"row":57,"column":25},"action":"remove","lines":["/"],"id":26}],[{"start":{"row":57,"column":4},"end":{"row":57,"column":6},"action":"insert","lines":["# "],"id":27}],[{"start":{"row":1,"column":2},"end":{"row":59,"column":21},"action":"remove","lines":["  ","    mount PdfjsViewer::Rails::Engine => \"/pdfjs\", as: 'pdfjs'","    devise_for :admins, :controllers => { :registrations => \"authentication/admins/registrations\" }","    devise_scope :admin do","        get '/login', to: 'devise/sessions#new'","        get '/password/settings', to: 'admins/registrations#edit'","        get '/retrieve/password', to: 'devise/passwords#new'","    end","    authenticated :admin do","        root 'admins#dashboard', as: :authenticated_user_root","        get '/profile', to: 'admins#profile'","    end","    ","    namespace :blog do","        get '/filter_by_category', to: 'articles#filter_by_category'","        get '/', to: 'articles#index'","        get '/create', to: 'articles#new'","        get '/category/:category', to: 'articles#show_category', as: 'show_category'","        get '/tagged/:tag', to: 'articles#show_tag', as: 'show_tag'","        get '/article/:id/edit', to: 'articles#edit'","        get '/article/:slug/:id', to: 'articles#show', as: \"show_article\"","        get '/article/:slug/:id/edit', to: 'articles#edit'","        ","        resources :articles","    end","    ","    namespace :project do","        get '/list', to: 'projects#index'","        get '/new', to: 'projects#new'","        get '/tagged/:tag', to: 'projects#show_tag', as: 'show_tag'","        get '/:slug', to: 'projects#show', as: \"show_project\"","        get '/:slug/edit', to: 'projects#edit'","        get '/:project_id/add-article', to: 'projects#add_article', as: \"add_article\"","        resources :projects","    end","    ","    namespace :freelance do","        get '/', to: 'freelance#index'","        get '/:name', to: 'freelance#show'","    end","    ","    resources :comments, except: [:show, :index, :edit]","    resources :admins, only: [:create, :update]","    resources :series, only: [:create, :update, :destroy, :show]","    ","    get '/a/:id', to: 'blog/articles#article_redirect_from_short_url'","    get '/preview_post', to: 'blog/articles#preview_post'","    get '/about', to: 'pages#about'","    get '/home', to: 'pages#home'","    get '/latest', to: 'pages#latest'","    get '/series', to: 'series#index'","    get '/fitness', to: 'fitness#index'","    get '/new-series', to: 'series#new'","    get '/s/:slug', to: 'series#show', as: 'show_series'","    get '/s/:slug/edit', to: 'series#edit'","    get '/photography', to: 'pages#photography'","    # get '/thesis', to: ''","    ","    root \"pages#home\""],"id":28,"ignore":true},{"start":{"row":1,"column":2},"end":{"row":1,"column":101},"action":"insert","lines":["# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html"]}],[{"start":{"row":0,"column":0},"end":{"row":3,"column":0},"action":"remove","lines":["Rails.application.routes.draw do","  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html","end",""],"id":29},{"start":{"row":0,"column":0},"end":{"row":57,"column":3},"action":"insert","lines":["Rails.application.routes.draw do","","    devise_for :admins, :controllers => { :registrations => \"authentication/admins/registrations\" }","    devise_scope :admin do","        get '/login', to: 'devise/sessions#new'","        get '/password/settings', to: 'admins/registrations#edit'","        get '/retrieve/password', to: 'devise/passwords#new'","    end","    authenticated :admin do","        root 'admins#dashboard', as: :authenticated_user_root","        get '/profile', to: 'admins#profile'","    end","    ","    namespace :blog do","        get '/filter_by_category', to: 'articles#filter_by_category'","        get '/', to: 'articles#index'","        get '/create', to: 'articles#new'","        get '/category/:category', to: 'articles#show_category', as: 'show_category'","        get '/tagged/:tag', to: 'articles#show_tag', as: 'show_tag'","        get '/article/:id/edit', to: 'articles#edit'","        get '/article/:slug/:id', to: 'articles#show', as: \"show_article\"","        get '/article/:slug/:id/edit', to: 'articles#edit'","        ","        resources :articles","    end","    ","    namespace :project do","        get '/list', to: 'projects#index'","        get '/new', to: 'projects#new'","        get '/tagged/:tag', to: 'projects#show_tag', as: 'show_tag'","        get '/:slug', to: 'projects#show', as: \"show_project\"","        get '/:slug/edit', to: 'projects#edit'","        get '/:project_id/add-article', to: 'projects#add_article', as: \"add_article\"","        resources :projects","    end","    ","    namespace :freelance do","        get '/', to: 'freelance#index'","        get '/:name', to: 'freelance#show'","    end","    ","    resources :comments, except: [:show, :index, :edit]","    resources :admins, only: [:create, :update]","    resources :series, only: [:create, :update, :destroy, :show]","    ","    get '/a/:id', to: 'blog/articles#article_redirect_from_short_url'","    get '/preview_post', to: 'blog/articles#preview_post'","    get '/about', to: 'pages#about'","    get '/home', to: 'pages#home'","    get '/latest', to: 'pages#latest'","    get '/series', to: 'series#index'","    get '/fitness', to: 'fitness#index'","    get '/new-series', to: 'series#new'","    get '/s/:slug', to: 'series#show', as: 'show_series'","    get '/s/:slug/edit', to: 'series#edit'","    ","    root \"pages#home\"","end"]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":4},"action":"insert","lines":["    "],"id":30}],[{"start":{"row":1,"column":4},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":31},{"start":{"row":2,"column":0},"end":{"row":2,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":2,"column":4},"end":{"row":2,"column":61},"action":"insert","lines":["mount PdfjsViewer::Rails::Engine => \"/pdfjs\", as: 'pdfjs'"],"id":32}],[{"start":{"row":2,"column":61},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":33},{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":46,"column":4},"end":{"row":47,"column":0},"action":"insert","lines":["",""],"id":50},{"start":{"row":47,"column":0},"end":{"row":47,"column":4},"action":"insert","lines":["    "]},{"start":{"row":47,"column":4},"end":{"row":47,"column":5},"action":"insert","lines":["g"]},{"start":{"row":47,"column":5},"end":{"row":47,"column":6},"action":"insert","lines":["e"]},{"start":{"row":47,"column":6},"end":{"row":47,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":47,"column":7},"end":{"row":47,"column":8},"action":"insert","lines":[" "],"id":51}],[{"start":{"row":47,"column":8},"end":{"row":47,"column":10},"action":"insert","lines":["''"],"id":53}],[{"start":{"row":47,"column":9},"end":{"row":47,"column":10},"action":"insert","lines":["/"],"id":54},{"start":{"row":47,"column":10},"end":{"row":47,"column":11},"action":"insert","lines":["p"]},{"start":{"row":47,"column":11},"end":{"row":47,"column":12},"action":"insert","lines":["d"]},{"start":{"row":47,"column":12},"end":{"row":47,"column":13},"action":"insert","lines":["f"]}],[{"start":{"row":47,"column":13},"end":{"row":47,"column":14},"action":"insert","lines":["/"],"id":55}],[{"start":{"row":47,"column":14},"end":{"row":47,"column":15},"action":"insert","lines":["t"],"id":56},{"start":{"row":47,"column":15},"end":{"row":47,"column":16},"action":"insert","lines":["h"]},{"start":{"row":47,"column":16},"end":{"row":47,"column":17},"action":"insert","lines":["e"]},{"start":{"row":47,"column":17},"end":{"row":47,"column":18},"action":"insert","lines":["s"]},{"start":{"row":47,"column":18},"end":{"row":47,"column":19},"action":"insert","lines":["i"]},{"start":{"row":47,"column":19},"end":{"row":47,"column":20},"action":"insert","lines":["s"]}],[{"start":{"row":47,"column":21},"end":{"row":47,"column":22},"action":"insert","lines":[","],"id":57}],[{"start":{"row":47,"column":22},"end":{"row":47,"column":23},"action":"insert","lines":[" "],"id":58},{"start":{"row":47,"column":23},"end":{"row":47,"column":24},"action":"insert","lines":["t"]},{"start":{"row":47,"column":24},"end":{"row":47,"column":25},"action":"insert","lines":["o"]},{"start":{"row":47,"column":25},"end":{"row":47,"column":26},"action":"insert","lines":[":"]}],[{"start":{"row":47,"column":26},"end":{"row":47,"column":27},"action":"insert","lines":[" "],"id":59}],[{"start":{"row":47,"column":27},"end":{"row":47,"column":29},"action":"insert","lines":["''"],"id":60}],[{"start":{"row":47,"column":28},"end":{"row":47,"column":29},"action":"insert","lines":["a"],"id":61},{"start":{"row":47,"column":29},"end":{"row":47,"column":30},"action":"insert","lines":["r"]},{"start":{"row":47,"column":30},"end":{"row":47,"column":31},"action":"insert","lines":["t"]},{"start":{"row":47,"column":31},"end":{"row":47,"column":32},"action":"insert","lines":["i"]},{"start":{"row":47,"column":32},"end":{"row":47,"column":33},"action":"insert","lines":["c"]},{"start":{"row":47,"column":33},"end":{"row":47,"column":34},"action":"insert","lines":["l"]},{"start":{"row":47,"column":34},"end":{"row":47,"column":35},"action":"insert","lines":["e"]},{"start":{"row":47,"column":35},"end":{"row":47,"column":36},"action":"insert","lines":["s"]}],[{"start":{"row":47,"column":28},"end":{"row":47,"column":29},"action":"insert","lines":["b"],"id":62},{"start":{"row":47,"column":29},"end":{"row":47,"column":30},"action":"insert","lines":["l"]},{"start":{"row":47,"column":30},"end":{"row":47,"column":31},"action":"insert","lines":["o"]},{"start":{"row":47,"column":31},"end":{"row":47,"column":32},"action":"insert","lines":["g"]},{"start":{"row":47,"column":32},"end":{"row":47,"column":33},"action":"insert","lines":["/"]}],[{"start":{"row":47,"column":41},"end":{"row":47,"column":42},"action":"insert","lines":["#"],"id":63},{"start":{"row":47,"column":42},"end":{"row":47,"column":43},"action":"insert","lines":["s"]},{"start":{"row":47,"column":43},"end":{"row":47,"column":44},"action":"insert","lines":["h"]},{"start":{"row":47,"column":44},"end":{"row":47,"column":45},"action":"insert","lines":["o"]},{"start":{"row":47,"column":45},"end":{"row":47,"column":46},"action":"insert","lines":["w"]},{"start":{"row":47,"column":46},"end":{"row":47,"column":47},"action":"insert","lines":["_"]}],[{"start":{"row":47,"column":47},"end":{"row":47,"column":48},"action":"insert","lines":["p"],"id":64},{"start":{"row":47,"column":48},"end":{"row":47,"column":49},"action":"insert","lines":["d"]},{"start":{"row":47,"column":49},"end":{"row":47,"column":50},"action":"insert","lines":["f"]}],[{"start":{"row":47,"column":14},"end":{"row":47,"column":20},"action":"remove","lines":["thesis"],"id":65},{"start":{"row":47,"column":14},"end":{"row":47,"column":15},"action":"insert","lines":[":"]},{"start":{"row":47,"column":15},"end":{"row":47,"column":16},"action":"insert","lines":["f"]},{"start":{"row":47,"column":16},"end":{"row":47,"column":17},"action":"insert","lines":["i"]},{"start":{"row":47,"column":17},"end":{"row":47,"column":18},"action":"insert","lines":["l"]},{"start":{"row":47,"column":18},"end":{"row":47,"column":19},"action":"insert","lines":["e"]}],[{"start":{"row":47,"column":19},"end":{"row":47,"column":20},"action":"insert","lines":["_"],"id":68},{"start":{"row":47,"column":20},"end":{"row":47,"column":21},"action":"insert","lines":["n"]},{"start":{"row":47,"column":21},"end":{"row":47,"column":22},"action":"insert","lines":["a"]},{"start":{"row":47,"column":22},"end":{"row":47,"column":23},"action":"insert","lines":["m"]},{"start":{"row":47,"column":23},"end":{"row":47,"column":24},"action":"insert","lines":["e"]}],[{"start":{"row":47,"column":50},"end":{"row":47,"column":54},"action":"remove","lines":["_pdf"],"id":69}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":47,"column":50},"end":{"row":47,"column":54},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1654275960096}
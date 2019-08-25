class ArticlesController < ApplicationController
    def blog
        @articles = Article.all
    end
    
    def show
        @article = Article.find_by(slug: params[:slug], id: params[:id])
    end
end
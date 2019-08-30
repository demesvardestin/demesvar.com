class ArticlesController < ApplicationController
    def blog
        @articles = Article.all
    end
    
    def show
        @article = Article.find_by(id: params[:id])
    end
    
    def new
        @article = Article.new 
    end
    
    def create
        @article = Article.new(article_params)
        @category = Category.find_by(name: params[:article][:category])
        @article.category = @category
        @article.save!
        
        redirect_to @article, notice: "Article saved!"
    end
    
    private
    
    def set_article
        @article = Article.find(params[:id])
    end
    
    def article_params
        params.require(:article).permit(:title, :content)
    end
end
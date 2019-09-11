class Blog::ArticlesController < ApplicationController
    before_action :authenticate_admin!, only: [:new, :create, :preview_post]
    before_action :set_article
    
    def index
        @articles = Article.all
    end
    
    def show
        @article = Article.find_by(id: params[:id])
        @comment = Comment.new
    end
    
    def new
        @article = Article.new 
    end
    
    def edit
        @article = Article.find_by(id: params[:id])
    end
    
    def update
        @article.update(article_params)
        
        respond_to do |format|
            if @article.save
                format.html { redirect_to blog_show_article_path(:slug => @article.slug),
                            notice: "article updated!" }
            end
        end
    end
    
    def create
        @article = Article.new(article_params)
        @category = Category.find_by(name: params[:article][:category])
        @article.category = @category
        @article.admin = current_admin
        @article.project = Project.find_by(id: params[:project_id]) if params[:project_id]
        @article.save!
        
        redirect_to blog_article_path(@article), notice: "Article saved!"
    end
    
    def preview_post
        @article = Article.new(article_params)
        @category = Category.find_by(name: params[:article][:category])
        @article.category = @category
        @comment = Comment.new
        
        render :layout => false
    end
    
    def filter_by_category
        if params[:category] == 'all'
            @articles = Article.all
        else
            @articles = Article.filter_by_category(params[:category])
        end
        
        render :layout => false
    end
    
    private
    
    def set_article
        @article = Article.find(params[:id])
    end
    
    def article_params
        params.require(:article).permit(:title, :content, :tags)
    end
end
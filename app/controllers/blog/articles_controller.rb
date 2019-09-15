class Blog::ArticlesController < ApplicationController
    before_action :authenticate_admin!, only: [:new, :create, :preview_post, :edit, :update, :destroy]
    before_action :set_article, only: [:update, :destroy]
    
    def index
        @articles = Article.all.order("created_at DESC")
    end
    
    def show
        @article = Article.find_by(id: params[:id])
        @related = Article.categorized_by(@article.category_name).where.not(id: @article.id)
        @commentable = Commentable.find_by(
            object_id: params[:id],
            object_type: Comment.get_model(request.env["REQUEST_PATH"])
            )
        @comment = Comment.new
    end
    
    def show_category
        @articles = Article.where(category_name: params[:category])
    end
    
    def show_tag
        @articles = Article.where("tags LIKE '%#{params[:tag]}%'")
    end
    
    def new
        @article = Article.new 
    end
    
    def edit
        @article = Article.find_by(id: params[:id])
    end
    
    def update
        @article.project_id = params[:article][:project_id]
        @article.update(article_params)
        
        respond_to do |format|
            if @article.save
                format.html { redirect_to blog_show_article_path(:slug => @article.slug),
                            notice: "article updated!" }
            end
        end
    end
    
    def destroy
        @article.delete
        
        redirect_to :back, notice: "article deleted!"
    end
    
    def create
        @article = Article.new(article_params)
        @article.admin = current_admin
        @article.project_id = params[:project_id] if params[:project_id]
        @article.save!
        
        redirect_to blog_article_path(@article), notice: "Article saved!"
    end
    
    def filter_by_category
        if params[:category] == 'all'
            @articles = Article.all.order("created_at DESC")
        else
            @articles = Article.where(category_name: params[:category]).order("created_at DESC")
        end
        
        render :layout => false
    end
    
    private
    
    def set_article
        @article = Article.find(params[:id])
    end
    
    def article_params
        params.require(:article).permit(:title, :content, :tags, :category_name, :project_id)
    end
end
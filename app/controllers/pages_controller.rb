class PagesController < ApplicationController
    def home
        @latest_posts = Article.published.where(project_id: nil).order("created_at DESC").last(10)
        @latest_projects = Project.all.order("created_at DESC").last(5)
    end
    
    def latest
        @article = Article.last
        redirect_to blog_show_article_path(:slug => @article.slug, :id => @article.id)
    end
end
class FitnessController < ApplicationController
    def index
        @article = Article.where("tags LIKE ?", "fitness").last
        
        if !@article.nil?
            redirect_to blog_show_article_path(:slug => @article.slug, :id => @article.id)
        else
            redirect_to "/", notice: "Article not found"
        end
    end
end

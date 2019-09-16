class PagesController < ApplicationController
    def home
        @latest_posts = Article.where(project_id: nil).order("created_at DESC").last(4)
        @latest_projects = Project.all.order("created_at DESC").last(5)
    end
end
class PagesController < ApplicationController
    def home
        @featured_post = Article.last # for now, will replace later with piece of code
        @latest_posts = Article.last(4) # for now, will replace with arbitrary number
        @latest_projects = Project.last(5)
    end
end
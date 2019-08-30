class PagesController < ApplicationController
    def home
        @featured_post = Article.last # for now, will replace later with piece of code
        @latest_posts = Article.all # for now, will replace with arbitrary number
    end
end
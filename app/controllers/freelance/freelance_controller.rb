class Freelance::FreelanceController < ApplicationController
    def index
    end
    
    def show
        @project_article = Article.find_by(title: params[:name])
    end
end
class Project::ProjectsController < ApplicationController
  before_action :authenticate_admin!, only: [:new, :create]
  
  def index
    @projects = Project.all
  end

  def show
  end
  
  def new
    @project = Project.new
  end
  
  def create
    @project = Project.new(project_params)
    @project.admin = current_admin
    @project.save!
    redirect_to add_project_article_path(:project_id => @project.id),
                notice: "Project added! Time to describe it at a high level."
  end
  
  private
  
  def project_params
    params.require(:project)
    .permit(
      :name, 
      :tags,
      :category,
      :github,
      :website)
  end
end

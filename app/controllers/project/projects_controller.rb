class Project::ProjectsController < ApplicationController
  before_action :authenticate_admin!, except: [:index, :show]
  before_action :set_project, only: [:show, :edit, :update, :destroy]
  
  def index
    @coding_projects = Project.where(category: "coding")
    @research_projects = Project.where(category: "research")
    @misc_projects = Project.where(category: "misc")
  end

  def show
  end
  
  def edit
  end
  
  def new
    @project = Project.new
  end
  
  def create
    @project = Project.new(project_params)
    @project.admin = current_admin
    @project.save!
    redirect_to project_add_article_path(:project_id => @project.id),
                notice: "Project added! Time to describe it at a high level."
  end
  
  def update
    @project.update(project_params)
    
    respond_to do |format|
      if @project.save
        format.html { redirect_to project_show_project_path(:slug => @project.slug),
                      notice: "project details saved!" }
      else
        format.html { render :edit, notice: "an error occured while saving this project" }
      end
    end
  end
  
  def add_article
    @article = Article.new
  end
  
  private
  
  def set_project
    @project = Project.find_by(id: params[:id]) || Project.find_by_slug(params[:slug])
  end
  
  def project_params
    params.require(:project)
    .permit(
      :name,
      :summary,
      :tags,
      :category,
      :github,
      :website)
  end
end

class Project::ProjectsController < ApplicationController
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
    @project.admin = Admin.first
    
    respond_to do |format|
      if @project.save
        format.html { redirect_to add_project_article_path(:project_id => @project.id),
                      notice: "Project added! Time to describe it at a high level." }
      else
        render :new
      end
    end
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

class SeriesController < ApplicationController
  before_action :authenticate_admin!, only: [:new, :create, :destroy]
  before_action :set_article, only: [:update, :destroy]
  before_action :set_series, only: [:edit, :show, :update]
  
  def new
    @series = Series.new
  end
  
  def index
    @series = Series.live
  end
  
  def show
    @articles = @series.articles
  end

  def create
    @series = Series.new(series_params)
    @series.admin = current_admin
    
    if @series.save
      redirect_to series_path(@series), notice: "Series created!"
    else
      redirect_to :back, notice: "An error occurred, please try again"
    end
  end
  
  def update
    @series.update(series_params)
    @series.save!
    
    redirect_to show_series_path(:slug => @series.slug), notice: "Series updated!"
  end

  def destroy
  end
  
  private
  
  def set_series
    @series = Series.find(params[:id]) || Series.find_by(slug: params[:slug].upcase)
  end
  
  def series_params
    params
    .require(:series)
    .permit(
      :name,
      :description
      )
  end
end

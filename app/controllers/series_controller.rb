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
    @series.save!
    
    redirect_to @series, notice: "Series created!"
  end
  
  def update
    @series.update(series_params)
    @series.save!
    
    redirect_to @series, notice: "Series updated!"
  end

  def destroy
  end
  
  private
  
  def set_series
    @series = Series.find_by(slug: params[:slug].upcase)
  end
end

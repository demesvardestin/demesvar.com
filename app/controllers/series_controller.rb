class SeriesController < ApplicationController
  before_action :authenticate_admin!, only: [:new, :create, :destroy]
  before_action :set_article, only: [:update, :destroy]
  
  def new
    @series = Series.new
  end
  
  def index
    @series = Series.live
  end
  
  def show
    @series = Series.find_by(slug: params[:slug].upcase)
    @articles = @series.articles
  end

  def create
    @series = Series.new(series_params)
    @series.save!
    
    redirect_to @series, notice: "Series created!"
  end

  def destroy
  end
end

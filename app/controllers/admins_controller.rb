class AdminsController < ApplicationController
  def dashboard
  end

  def profile
  end
  
  private
  
  def admin_params
    params.require(:admin)
    .permit(
      :first_name,
      :last_name,
      :website,
      :twitter,
      :linkedin,
      :instagram,
      :github,
      :bio)
  end
end

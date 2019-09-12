class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.commentable = Commentable.find(params[:comment][:commentable_id])
    @comment.save!
    
    redirect_to :back, notice: "thanks for commenting!"
  end
  
  private
  
  def comment_params
    params.require(:comment)
    .permit(
      :commenter_name,
      :commenter_email,
      :content,
      :commentable_id
      )
  end
end

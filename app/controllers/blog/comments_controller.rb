class Blog::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.article = Article.find(params[:comment][:article_id])
    
    respond_to do |format|
      if @comment.save
        format.html { redirect_to :back, notice: "thanks for commenting!" }
      end
    end
  end
  
  private
  
  def comment_params
    params.require(:comment)
    .permit(
      :commenter_name,
      :commenter_email,
      :content,
      :article_id
      )
  end
end

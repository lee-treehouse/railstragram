class LikesController < ApplicationController
    
    before_action :set_post
    
    def toggle_like
    end

    private
    def set_post
      @post = Post.find(params[:post_id])
    end

end
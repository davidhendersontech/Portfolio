class PostsController < ApplicationController
  before_action :find_post, only: [:show, :destroy]

  def index
    @posts = Post.all
    render json: @posts, status: :ok
  end

  def show
    render json: @post
  end

  def create
    @title = params[:title]
    @body = params[:body]
    @author = params[:author]
    
    @new_post = Post.create title: @title, body: @body, author: @author
    render json: @new_post, status: :created
  end

  def destroy
    @post.destroy
    render json: {message: "post has been deleted!"}, status: :no_content
  end

  private
  def find_post
    @post = Post.find(params[:id])
  end

end

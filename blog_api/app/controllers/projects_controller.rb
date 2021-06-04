class ProjectsController < ApplicationController
  before_action :find_project, only: [:show, :destroy]

  def index
    @projects = Project.all
    render json: @projects, status: :ok
  end

  def show
    render json: @project
  end

  def create
    @title = params[:title]
    @link = params[:link]
    @pic = params[:pic]
    
    @new_project = Post.create title: @title, link: @link, pic: @pic
    render json: @new_project, status: :created
  end

  def destroy
    @project.destroy
    render json: {message: "project has been deleted!"}, status: :no_content
  end

  private
  def find_project
    @project = Project.find(params[:id])
  end

end

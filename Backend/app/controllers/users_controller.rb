class UsersController < ApplicationController
  before_action :authenticate_user!


  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def show
    # Optionally, check if the current user is allowed to see the user profile
    @user = User.find(params[:id])
    render json: @user
  end
  
  private
  
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :first_name, :last_name, :role)
  end

end


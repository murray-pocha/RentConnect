  class UsersController < ApplicationController
    before_action :authenticate_user!
    before_action :set_user, only: [:show, :update, :destroy]


  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end
  def show
    render json: @user
  end

  def update 
    if @user.update(user_params)
      render json: @user, status: :ok
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end
       
   private

   def set_user
    @user = User.find(params[:id])
   rescue ActiveRecord::RecordNotFound
    render json: { error: 'User not found' }, status: :not_found
   end
  
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :first_name, :last_name, :role)
  end

end


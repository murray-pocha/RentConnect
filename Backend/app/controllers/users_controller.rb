class UsersController < ApplicationController
  before_action :authenticate_user!

  def show
    # Optionally, check if the current user is allowed to see the user profile
    @user = User.find(params[:id])
    render json: @user
  end
end


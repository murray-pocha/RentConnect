class Users::RegistrationsController < Devise::RegistrationsController
    respond_to :json
  
    # Skip the require_no_authentication filter for API requests
    skip_before_action :require_no_authentication, only: [:create]
  
    def create
      build_resource(sign_up_params)
  
      if resource.save
        sign_up(resource_name, resource)
        render json: { message: "User created successfully", user: resource }, status: :created
      else
        Rails.logger.error "User creation failed: #{resource.errors.full_messages.join(', ')}"
        render json: { errors: resource.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def sign_up_params
      params.require(:user).permit(:email, :password, :password_confirmation, :first_name, :last_name, :role)
    end
  
    def flash
      {}
    end
  end


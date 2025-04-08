class RentalPropertiesController < ApplicationController
  #before_action :set_rental_property, only: %i[show edit update destroy]

  # GET /rental_properties or /rental_properties.json
  def index
    @rental_properties = RentalProperty.all
    render json: @rental_properties
  end

  # GET /rental_properties/1 or /rental_properties/1.json
  def show
    render json: @rental_property
  end

  # GET /rental_properties/new
   def create
    @rental_property = RentalProperty.new(rental_property_params)
    #@rental_property.user = current_user

    if @rental_property.save
      render json: @rental_property, status: :created
    else
      render json: @rental_property.errors, status: :unprocessable_entity
    end
  end

   # GET /rental_properties/1/edit

   def update
     if @rental_property.update(rental_property_params)
       render json: @rental_property
     else
       render json: @rental_property.errors.full_messages, status: :unprocessable_entity
     end
   end

   # DELETE /rental_properties/1 or /rental_properties/1.json
    def destroy
      @rental_property.destroy
      head :no_content
    end

    private
    
    def set_rental_property
      @rental_property = RentalProperty.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: { error: 'Rental property not found' }, status: not_found
    end

    def rental_property_params
      params.require(:rental_property).permit(:title, :description, :address, :sq_feet, :bedrooms, :bathrooms, :property_types, :fees, :utilities_included, :user_id)
    end
end

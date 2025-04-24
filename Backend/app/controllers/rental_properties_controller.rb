class RentalPropertiesController < ApplicationController
  before_action :set_rental_property, only: %i[show update destroy]

  # GET /rental_properties
  def index
    if params[:user_id]
      @rental_properties = RentalProperty.where(user_id: params[:user_id])
    else
      @rental_properties = RentalProperty.all
<<<<<<< HEAD
    render json: @rental_properties.as_json(methods: [:latitude, :longitude])
=======
>>>>>>> 7c2abd8 (Frontend: Implemented property type image filtering and styling updates; Backend: Refreshed seed data with full property type coverage)
  end
  render json: @rental_properties.as_json(methods: [:latitude, :longitude, :images_urls])
end

  # GET /rental_properties/:id
  def show
    render json: @rental_property.as_json(methods: [:latitude, :longitude, :images_urls])
  end

  # POST /rental_properties
  def create
    @rental_property = RentalProperty.new(rental_property_params)

    if @rental_property.save
      render json: @rental_property.as_json(methods: [:latitude, :longitude, :images_urls]), status: :created
    else
      render json: @rental_property.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /rental_properties/:id
  def update
    if @rental_property.update(rental_property_params)
      render json: @rental_property.as_json(methods: [:latitude, :longitude, :images_urls])
    else
      render json: @rental_property.errors.full_messages, status: :unprocessable_entity
    end
  end

  # DELETE /rental_properties/:id
  def destroy
    @rental_property.destroy
    head :no_content
  end

  private

  def set_rental_property
    @rental_property = RentalProperty.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Rental property not found' }, status: :not_found
  end

  def rental_property_params
    params.require(:rental_property).permit(
      :title,
      :description,
      :address,
      :sq_feet,
      :bedrooms,
      :bathrooms,
      :property_types,
      :fees,
      :utilities_included,
      :user_id,
      images: []
    )
  end
end

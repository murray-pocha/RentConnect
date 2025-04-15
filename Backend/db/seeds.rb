# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# Clear existing data
RentalApplication.destroy_all
RentalProperty.destroy_all
User.destroy_all

# Create sample users
admin = User.create!(
  email: "admin@example.com",
  password: "password123",
  first_name: "Admin",
  last_name: "User",
  role: 1 # Assuming role 1 is admin
)

jane = User.create!(
  email: "jane.doe@example.com",
  password: "securepass",
  first_name: "Jane",
  last_name: "Doe"
)

john = User.create!(
  email: "john.smith@example.com",
  password: "anotherpass",
  first_name: "John",
  last_name: "Smith"
)

# Create sample rental properties
RentalProperty.create!(
  title: "Cozy Apartment in Downtown",
  description: "A beautiful and cozy apartment located in the heart of downtown.",
  address: "123 Main Street, New York, NY 10001",
  sq_feet: 850,
  bedrooms: 2,
  bathrooms: 1,
  property_types: "Apartment",
  fees: 1200.00,
  utilities_included: true,
  user_id: jane.id # Use the variable for the user
)

RentalProperty.create!(
  title: "Spacious Family Home",
  description: "A spacious home perfect for families, with a large backyard.",
  address: "456 Elm Street, Los Angeles, CA 90001",
  sq_feet: 2000,
  bedrooms: 4,
  bathrooms: 3,
  property_types: "House",
  fees: 2500.00,
  utilities_included: false,
  user_id: admin.id # Use the variable for the user
)

RentalProperty.create!(
  title: "Modern Studio Apartment",
  description: "A modern studio apartment with all the amenities you need.",
  address: "789 Oak Avenue, Chicago, IL 60601",
  sq_feet: 500,
  bedrooms: 1,
  bathrooms: 1,
  property_types: "Studio",
  fees: 900.00,
  utilities_included: true,
  user_id: john.id # Use the variable for the user
)

RentalProperty.create!(
  title: "Luxury Condo with Ocean View",
  description: "A luxurious condo with breathtaking ocean views.",
  address: "101 Ocean Drive, Miami, FL 33139",
  sq_feet: 1500,
  bedrooms: 3,
  bathrooms: 2,
  property_types: "Condo",
  fees: 3500.00,
  utilities_included: true,
  user_id: admin.id # Use the variable for the user
)

RentalProperty.create!(
  title: "Rustic Cabin in the Woods",
  description: "A peaceful cabin surrounded by nature.",
  address: "789 Pine Lane, Asheville, NC 28801",
  sq_feet: 1200,
  bedrooms: 2,
  bathrooms: 2,
  property_types: "Cabin",
  fees: 1800.00,
  utilities_included: false,
  user_id: jane.id # Use the variable for the user
)
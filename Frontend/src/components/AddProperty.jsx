import React, { useState } from "react";
import { FormControl, FormControlLabel, Checkbox, FormHelperText, Input, InputLabel, Button, Autocomplete } from '@mui/material';
import FileUpload from "./fileUpload";
import axios from 'axios';

function AddProperty() {
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    province: "",
    country: "",
    title: "",
    description: "",
    sq_ft: "",
    bedrooms: "",
    bathrooms: "",
    fees: "",
    utilities_included: false,
    images: [],
    property_type:"",
  });

  const handleChange = (event) => {
    console.log("formData", formData)
    const { id, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (files) => {
    setFormData({
      ...formData,
      images: files,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Validate form fields
    if (Object.values(formData).some((value) => value === "")) {
      alert("Please fill all required fields.");
      return;
    }
  
    try {
      const formDataToSend = new FormData();
  
      // Combine street, city, province, and country into a single address field
      const address = `${formData.street}, ${formData.city}, ${formData.province}, ${formData.country}`;
      formDataToSend.append("rental_property[address]", address); // Wrap in rental_property
  
      // Add all other fields except street, city, province, and country
      for (const key in formData) {
        if (key === "images") {
          // Add images as separate files
          formData.images.forEach((file) => {
            formDataToSend.append("rental_property[images][]", file); // Wrap in rental_property
          });
        } else if (!["street", "city", "province", "country"].includes(key)) {
          // Convert specific fields to numbers
          if (["bedrooms", "bathrooms", "sq_ft", "fees"].includes(key)) {
            formDataToSend.append(`rental_property[${key === "sq_ft" ? "sq_feet" : key}]`, Number(formData[key])); // Wrap in rental_property
          } else if (key === "property_type") {
            formDataToSend.append("rental_property[property_types]", formData[key]); // Wrap in rental_property
          } else {
            formDataToSend.append(`rental_property[${key}]`, formData[key]); // Wrap in rental_property
          }
        }
      }
  
      // Add user_id (replace with the actual user ID)
      formDataToSend.append("rental_property[user_id]", Number(16)) // Replace 1 with the actual user ID
  
      // Send the request
      const response = await axios.post("http://localhost:3000/rental_properties", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data", // Let Axios handle this automatically
        },
      });
  
      // Handle success
      console.log("Property added successfully:", response.data);
      alert("Property added successfully!");
    } catch (error) {
      // Handle errors
      console.error("Error submitting property:", error.response || error);
      alert("Error submitting property. Please try again.");
    }
  };
      

  return (
    <div className="add_property_container">
      <h1>Add New Property</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          {/* Property Title */}
          <FormControl margin="normal" required>
            <InputLabel htmlFor="title">Property Title</InputLabel>
            <Input
              id="title"
              value={formData.title}
              onChange={handleChange}
              aria-describedby="property_title_helper"
            />
            <FormHelperText id="property_title_helper">Enter the title of the property.</FormHelperText>
          </FormControl>

          {/* Property Description */}
          <FormControl margin="normal" required>
            <InputLabel htmlFor="property_description">Property Description</InputLabel>
            <Input
              id="description"
              value={formData.description}
              onChange={handleChange}
              aria-describedby="property_description_helper"
            />
            <FormHelperText id="description_helper">Provide a brief description of the property.</FormHelperText>
          </FormControl>

          {/* Property Type */}
          <FormControl margin="normal">
            <select
              id="property_type"
              value={formData.property_type}
              onChange={handleChange}
              style={{
                padding: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
                width: "100%",
              }}
            >
              <option value="">Select Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="studio">Studio</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
              <option value="cottage">Cottage</option>
            </select>
            <FormHelperText id="property_type_helper">Select the type of property.</FormHelperText>
          </FormControl>

          {/* Square Footage */}
          <FormControl margin="normal" required>
            <InputLabel htmlFor="property_sqft">Square Footage</InputLabel>
            <Input
              type="number"
              id="sq_ft"
              value={formData.sq_ft}
              onChange={handleChange}
              aria-describedby="property_sqft_helper"
            />
            <FormHelperText id="property_sqft_helper">Enter the total square footage of the property.</FormHelperText>
          </FormControl>

          {/* Bedrooms */}
          <FormControl margin="normal" required>
            <InputLabel htmlFor="bedrooms">Number of Bedrooms</InputLabel>
            <Input
              type="number"
              id="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              aria-describedby="bedrooms_helper"
            />
            <FormHelperText id="bedrooms_helper">Enter the number of bedrooms.</FormHelperText>
          </FormControl>

          {/* Bathrooms */}
          <FormControl margin="normal" required>
            <InputLabel htmlFor="bathrooms">Number of Bathrooms</InputLabel>
            <Input
              type="number"
              id="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              aria-describedby="bathrooms_helper"
            />
            <FormHelperText id="bathrooms_helper">Enter the number of bathrooms.</FormHelperText>
          </FormControl>

          {/* Monthly Rent (Fees) */}
          <FormControl margin="normal" required>
            <InputLabel htmlFor="fees">Monthly Rent (Fees)</InputLabel>
            <Input
              type="number"
              id="fees"
              value={formData.fees}
              onChange={handleChange}
              aria-describedby="fees_helper"
            />
            <FormHelperText id="fees_helper">Enter the monthly rent for the property.</FormHelperText>
          </FormControl>

          {/* Street */}
          <FormControl margin="normal" required>
            <InputLabel htmlFor="street">Street</InputLabel>
            <Input
              id="street"
              value={formData.street}
              onChange={handleChange}
              aria-describedby="street_helper"
              autoComplete="shipping street-address"
            />
            <FormHelperText id="street_helper">Enter the street address.</FormHelperText>
          </FormControl>

          {/* City */} 
          <FormControl margin="normal" required>
            <InputLabel htmlFor="city">City</InputLabel>
            <Input
              id="city"
              value={formData.city}
              onChange={handleChange}
              aria-describedby="city_helper"
              autoComplete="home city"
            />
            <FormHelperText id="city_helper">Enter the city.</FormHelperText>
          </FormControl>

          {/* Province */}
          <FormControl margin="normal" required>
            <InputLabel htmlFor="province">Province</InputLabel>
            <Input
              id="province"
              value={formData.province}
              onChange={handleChange}
              aria-describedby="province_helper"
              autoComplete="addresss-level1"
            />
            <FormHelperText id="province_helper">Enter the province or state.</FormHelperText>
          </FormControl>

          {/* Country */}
          <FormControl margin="normal" required>
            <InputLabel htmlFor="country">Country</InputLabel>
            <Input
              id="country"
              value={formData.country}
              onChange={handleChange}
              aria-describedby="country_helper"
              autoComplete="country"
            />
            <FormHelperText id="country_helper">Enter the country.</FormHelperText>
          </FormControl>

          {/* Utilities Included */}
        <FormControl margin="normal" required>
          <FormControlLabel
            control={
              <Checkbox
                id="utilities_included"
                checked={formData.utilities_included}
                onChange={handleChange}
              />
            }
            label="Utilities Included"
          />
          <FormHelperText id="utilities_included_helper">Check if utilities are included in the rent.</FormHelperText>
        </FormControl>

        </div>

        {/* File Upload */}
        <FormControl>
          <FileUpload onFileChange={handleFileChange} />
        </FormControl>
      </form>

        <Button
        className="file_label"
        onClick={handleSubmit}
        variant="contained" 
        color="primary">
          Submit New Property
        </Button>
    </div>
  );
}

export default AddProperty;
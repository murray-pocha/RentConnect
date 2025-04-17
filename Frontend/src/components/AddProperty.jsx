import React, { useState } from "react";
import { FormControl, FormControlLabel, Checkbox, FormHelperText, Input, InputLabel, Button, Autocomplete } from '@mui/material';
import FileUpload from "./fileUpload";
import { create_rental_property } from "../api/rentalEndpoints";

function AddProperty() {
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    province: "",
    country: "",
    property_title: "",
    property_description: "",
    property_sqft: "",
    bedrooms: "",
    bathrooms: "",
    fees: "",
    utilities_included: false,
    photos: [],
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
    console.log("formData", formData)
    setFormData({
      ...formData,
      photos: files,
    });
  };

  const handleSubmit = (event) => {
    console.log("formData", formData)
    event.preventDefault();
    if(Object.values(formData).some((value) => value === "")) {
      alert("Please fill all required fields.")
    } else {
    console.log("Form Data Submitted:", formData);
    create_rental_property(formData).then((response) => console.log(response));
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
            <InputLabel htmlFor="property_title">Property Title</InputLabel>
            <Input
              id="property_title"
              value={formData.property_title}
              onChange={handleChange}
              aria-describedby="property_title_helper"
            />
            <FormHelperText id="property_title_helper">Enter the title of the property.</FormHelperText>
          </FormControl>

          {/* Property Description */}
          <FormControl margin="normal" required>
            <InputLabel htmlFor="property_description">Property Description</InputLabel>
            <Input
              id="property_description"
              value={formData.property_description}
              onChange={handleChange}
              aria-describedby="property_description_helper"
            />
            <FormHelperText id="property_description_helper">Provide a brief description of the property.</FormHelperText>
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
              id="property_sqft"
              value={formData.property_sqft}
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
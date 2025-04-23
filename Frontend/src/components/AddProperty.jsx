import React, { useState } from "react";
import { FormControl, Button, FormControlLabel, Checkbox, FormHelperText, Input, InputLabel } from '@mui/material';
import FileUpload from "./fileUpload";

function AddProperty() {

  const [formData, setFormData] = useState({
    property_title: "",
    property_description: "",
    property_sqft: "",
    bedrooms: "",
    bathrooms: "",
    fees: "",
    utilities_included: false,
    property_address: "", // Adding address field
    property_types: "", // Adding property type field
  });

  const [files, setFiles] = useState([]);

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formPayload = new FormData();

    // Append form text data using the correct field names
    for (let key in formData) {
      if (key === "property_title") {
        formPayload.append("rental_property[title]", formData[key]);
      } else if (key === "property_description") {
        formPayload.append("rental_property[description]", formData[key]);
      } else if (key === "property_sqft") {
        formPayload.append("rental_property[sq_feet]", formData[key]);
      } else if (key === "property_address") {
        formPayload.append("rental_property[address]", formData[key]);
      } else if (key === "property_types") {
        formPayload.append("rental_property[property_types]", formData[key]);
      } else {
        formPayload.append(`rental_property[${key}]`, formData[key]);
      }
    }

    // Hardcode user_id as 14
    formPayload.append("rental_property[user_id]", 14);

    // Append files
    files.forEach((file) => {
      formPayload.append('rental_property[images][]', file);
    });

    try {
      const response = await fetch("http://localhost:3001/rental_properties", {
        method: "POST",
        body: formPayload,
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Property successfully created!", data);
        // Optionally, reset form
        setFormData({
          property_title: "",
          property_description: "",
          property_sqft: "",
          bedrooms: "",
          bathrooms: "",
          fees: "",
          utilities_included: false,
          property_address: "",
          property_types: "",
        });
      } else {
        console.error("Error creating property:", data);
      }
    } catch (error) {
      console.error("Error during submission:", error);
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
          <FormControl margin="normal">
            <InputLabel htmlFor="property_title">Property Title</InputLabel>
            <Input
              id="property_title"
              value={formData.property_title}
              onChange={handleChange}
              aria-describedby="property_title_helper"
            />
            <FormHelperText id="property_title_helper">Enter the title of the property.</FormHelperText>
          </FormControl>

          <FormControl margin="normal">
            <InputLabel htmlFor="property_description">Property Description</InputLabel>
            <Input
              id="property_description"
              value={formData.property_description}
              onChange={handleChange}
              aria-describedby="property_description_helper"
            />
            <FormHelperText id="property_description_helper">Provide a brief description of the property.</FormHelperText>
          </FormControl>

          <FormControl margin="normal">
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

          <FormControl margin="normal">
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

          <FormControl margin="normal">
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

          <FormControl margin="normal">
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

          {/* Additional Fields for Address and Property Type */}
          <FormControl margin="normal">
            <InputLabel htmlFor="property_address">Property Address</InputLabel>
            <Input
              id="property_address"
              value={formData.property_address}
              onChange={handleChange}
              aria-describedby="property_address_helper"
            />
            <FormHelperText id="property_address_helper">Enter the property's address.</FormHelperText>
          </FormControl>

          <FormControl margin="normal">
            <InputLabel htmlFor="property_types">Property Type</InputLabel>
            <Input
              id="property_types"
              value={formData.property_types}
              onChange={handleChange}
              aria-describedby="property_types_helper"
            />
            <FormHelperText id="property_types_helper">Enter the property type (e.g., apartment, house, etc.).</FormHelperText>
          </FormControl>

        </div>

        <FormControl margin="normal">
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

        <FileUpload onFilesSelected={(selectedFiles) => setFiles([...selectedFiles])} />
        <FormHelperText id="file_upload_helper">Upload images of the property.</FormHelperText>

        <button
          type="submit"
          className="file_label"
        >
          Submit New Property
        </button>
      </form>
    </div>
  )
}

export default AddProperty;


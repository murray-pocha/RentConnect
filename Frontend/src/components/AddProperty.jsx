import React from "react";
import { FormControl, Button, FormControlLabel, Checkbox, FormHelperText, Input, InputLabel, Select } from '@mui/material'
import FileUpload from "./fileUpload";
import { useState } from "react";
import { AddressAutofill } from '@mapbox/search-js-react'

function AddProperty() {

  const [value, setValue] = React.useState('');

  const [formData, setFormData] = useState({
    property_address: "",
    property_title: "",
    property_description: "",
    property_sqft: "",
    bedrooms: "",
    bathrooms: "",
    fees: "",
    utilities_included: false,
  });

  const handleChange = (event) => {
    const { id, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  }

  const handleAutoFillChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setFormData({
      property_address: event.target.address.value,
      property_title: event.target.property_title.value,
      property_description: event.target.property_description.value,
      property_sqft: event.target.property_sqft.value,
      bedrooms: event.target.bedrooms.value,
      bathrooms: event.target.bathrooms.value,
      fees: event.target.fees.value,
      utilities_included: false,
    })
    console.log("Form Data Submitted:", formData);
    // Add your API call or form submission logic here
    }


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
          <Input id="property_title" aria-describedby="property_title_helper" />
          <FormHelperText id="property_title_helper">Enter the title of the property.</FormHelperText>
        </FormControl>

        <FormControl margin="normal">
          <InputLabel htmlFor="property_description">Property Description</InputLabel>
          <Input id="property_description" aria-describedby="property_description_helper" />
          <FormHelperText id="property_description_helper">Provide a brief description of the property.</FormHelperText>
        </FormControl>

        <FormControl margin="normal">
          <InputLabel htmlFor="property_sqft">Square Footage</InputLabel>
          <Input type="number" id="property_sqft" aria-describedby="property_sqft_helper" />
          <FormHelperText id="property_sqft_helper">Enter the total square footage of the property.</FormHelperText>
        </FormControl>

        <FormControl margin="normal">
          <InputLabel htmlFor="bedrooms">Number of Bedrooms</InputLabel>
          <Input type="number" id="bedrooms" aria-describedby="bedrooms_helper" />
          <FormHelperText id="bedrooms_helper">Enter the number of bedrooms.</FormHelperText>
        </FormControl>

        <FormControl margin="normal">
          <InputLabel htmlFor="bathrooms">Number of Bathrooms</InputLabel>
          <Input type="number" id="bathrooms" aria-describedby="bathrooms_helper" />
          <FormHelperText id="bathrooms_helper">Enter the number of bathrooms.</FormHelperText>
        </FormControl>

        <FormControl margin="normal">
          <InputLabel htmlFor="fees">Monthly Rent (Fees)</InputLabel>
          <Input type="number" id="fees" aria-describedby="fees_helper" />
          <FormHelperText id="fees_helper">Enter the monthly rent for the property.</FormHelperText>
        </FormControl>

        <FormControl margin="normal">
          <InputLabel htmlFor="address">Address</InputLabel>
          <AddressAutofill
            accessToken={import.meta.env.VITE_REACT_APP_MAPBOX_ACCESS_TOKEN}
            >
            <Input
            type="text" 
            autoComplete=" shipping address-line1"
            value={value}
            onChange={handleAutoFillChange}
            id="address" 
            aria-describedby="address_helper" />
          </AddressAutofill>
          <FormHelperText id="address_helper">Enter the address of the property.</FormHelperText>
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

        <FileUpload />

        <button 
          onSubmit={handleSubmit}
          className="file_label"
        >
          Submit New Property
        </button>
        </form>
    </div>
  )
}

export default AddProperty;
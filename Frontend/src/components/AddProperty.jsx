import React from "react";
import { FormControl, Button, FormControlLabel, Checkbox, FormHelperText, Input, InputLabel, Select } from '@mui/material'

function AddProperty() {

  return (
    <div className="add_property_container">
      <h1>Add Property</h1>
      <FormControl margin="normal">
        <InputLabel htmlFor="property_title">Property Title</InputLabel>
        <Input id="property_title" aria-describedby="property_title_helper" />
        <FormHelperText id="property_title_helper">Enter the title of the property.</FormHelperText>
      </FormControl>

      <FormControl  margin="normal">
        <InputLabel htmlFor="property_description">Property Description</InputLabel>
        <Input id="property_description" aria-describedby="property_description_helper" />
        <FormHelperText id="property_description_helper">Provide a brief description of the property.</FormHelperText>
      </FormControl>

      <FormControl  margin="normal">
        <InputLabel htmlFor="property_sqft">Square Footage</InputLabel>
        <Input type="number" id="property_sqft" aria-describedby="property_sqft_helper" />
        <FormHelperText id="property_sqft_helper">Enter the total square footage of the property.</FormHelperText>
      </FormControl>

      <FormControl  margin="normal">
        <InputLabel htmlFor="bedrooms">Number of Bedrooms</InputLabel>
        <Input type="number" id="bedrooms" aria-describedby="bedrooms_helper" />
        <FormHelperText id="bedrooms_helper">Enter the number of bedrooms.</FormHelperText>
      </FormControl>

      <FormControl  margin="normal">
        <InputLabel htmlFor="bathrooms">Number of Bathrooms</InputLabel>
        <Input type="number" id="bathrooms" aria-describedby="bathrooms_helper" />
        <FormHelperText id="bathrooms_helper">Enter the number of bathrooms.</FormHelperText>
      </FormControl>

      <FormControl  margin="normal">
        <InputLabel htmlFor="property_type">Property Type</InputLabel>
        <Select
          native
          id="property_type"
          inputProps={{
            name: 'property_type',
            id: 'property_type',
          }}
          aria-describedby="property_type_helper"
        >
          <option value="" />
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Studio">Studio</option>
          <option value="Condo">Condo</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Cottage">Cottage</option>
        </Select>
        <FormHelperText id="property_type_helper">Select the type of property.</FormHelperText>
      </FormControl>

      <FormControl margin="normal">
        <InputLabel htmlFor="fees">Monthly Rent (Fees)</InputLabel>
        <Input type="number" id="fees" aria-describedby="fees_helper" />
        <FormHelperText id="fees_helper">Enter the monthly rent for the property.</FormHelperText>
      </FormControl>

      <FormControl margin="normal">
        <FormControlLabel
          control={<Checkbox id="utilities_included" />}
          label="Utilities Included"
        />
        <FormHelperText id="utilities_included_helper">Check if utilities are included in the rent.</FormHelperText>
      </FormControl>

      <FormControl margin="normal">
        <input type="file"  id="image"/>      
      </FormControl>
    </div>
  )
}

export default AddProperty;
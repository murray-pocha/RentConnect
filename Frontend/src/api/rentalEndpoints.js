import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const rental_property_endpoints = {
  GET_RENTAL_PROPERTIES: `${BASE_URL}/rental_properties`,
  // GET_RENTAL_PROPERTY: `${BASE_URL}/rental_property/:id`,
  // CREATE_RENTAL_PROPERTY: `${BASE_URL}/rental_properties/new`,
  // EDIT_RENTAL_PROPERTY: `${BASE_URL}/rental_property/:id/edit`,
  // DELETE_RENTAL_PROPERTY: `${BASE_URL}/rental_property/:id`,
};


// Axios requests for each endpoint
export const get_all_rental_properties = async () => {
  const response = await axios.get(rental_property_endpoints.GET_RENTAL_PROPERTIES);
  return response.data;
};

// const get_rental_property = async (id) => {
//   const response = await axios.get(rental_property_endpoints.GET_RENTAL_PROPERTY(id));
//   return response.data;
// };

// const create_rental_property = async (propertyData) => {
//   const response = await axios.post(rental_property_endpoints.CREATE_RENTAL_PROPERTY, propertyData);
//   return response.data;
// };

// const edit_rental_property = async (id, propertyData) => {
//   const response = await axios.put(rental_property_endpoints.EDIT_RENTAL_PROPERTY(id), propertyData);
//   return response.data;
// };

// const delete_rental_property = async (id) => {
//   const response = await axios.delete(rental_property_endpoints.DELETE_RENTAL_PROPERTY(id));
//   return response.data;
// };


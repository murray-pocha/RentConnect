import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const rental_property_endpoints = {
  GET_RENTAL_PROPERTIES: `${BASE_URL}/rental_properties`,
  GET_RENTAL_PROPERTY_BY_ID: `${BASE_URL}/rental_properties`,
  // GET_RENTAL_PROPERTY: `${BASE_URL}/rental_property/:id`,
  // CREATE_RENTAL_PROPERTY: `${BASE_URL}/rental_properties/new`,
  // EDIT_RENTAL_PROPERTY: `${BASE_URL}/rental_property/:id/edit`,
  // DELETE_RENTAL_PROPERTY: `${BASE_URL}/rental_property/:id`,
};
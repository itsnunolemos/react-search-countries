
/**
 * Module dependencies.
 */

import actionTypes from '../action-types';

/**
 * Get all countries.
 */

export function getCountries() {
  return (dispatch) => {
    dispatch({ type: actionTypes.FETCH_COUNTRIES });
    return fetch('https://restcountries.eu/rest/v2/all')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: actionTypes.GET_COUNTRIES, payload: data });
      });
  };
}

/**
 * Get a specific country.
 */

export function getCountry(data) {
  return (dispatch) => {
    dispatch({ type: actionTypes.GET_COUNTRY, payload: data });
  };
}

/**
 * Reset a specific country.
 */

export function resetCountry() {
  return (dispatch) => {
    dispatch({ type: actionTypes.RESET_COUNTRY });
  };
}

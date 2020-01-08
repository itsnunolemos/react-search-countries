
/**
 * Module dependencies.
 */

import actionTypes from '../action-types';

/**
 * `initialState`.
 */

const initialState = {
  items: [],
  item: [],
  loading: false,
  error: null
};

/**
 * Reducer `countries`.
 */

export default function countries(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_COUNTRIES:
      return {
        ...state,
        loading: true,
        error: null
      };

    case actionTypes.GET_COUNTRIES:
      return {
        ...state,
        loading: false,
        items: action.payload
      };

    case actionTypes.GET_COUNTRY:
      return {
        ...state,
        loading: false,
        item: state.items.filter((o) => o.name.toLowerCase().includes(action.payload.toLowerCase()))
      };

    case actionTypes.RESET_COUNTRY:
      return {
        ...state,
        loading: false,
        item: []
      };

    default:
      return state;
  }
}

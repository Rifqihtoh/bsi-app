//action.jsx
// import {ADD_NOTE} from "../type/type"
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE } from "../type/type";


export const increment = () => {
    return {
        type: "INCREMENT",
    };
}

export const decrement = () => {
    return {
        type: "DECREMENT",
    };
}

export const multi2 = () => {
    return {
        type: "MULTI2",
    };
}

export const div2 = () => {
    return {
        type: "DIV2",
    };
}

export const reset = () => {
    return {
        type: "RESET",
    };
}

export const addNote = (note) => {
    return {
        type: 'ADD_NOTE',
        payload: note
    }
}

export const editNote = (index, newText) => {
    return {
        type: 'EDIT_NOTE',
        payload: { index, newText }
    }
}

export const deleteNote = (index) => {
    return {
        type: 'REMOVE_NOTE',
        payload: {index}
    }
}

export const fetchProducts = () => {
    return async dispatch => {
      dispatch(fetchProductsRequest());
      try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const data = await response.json();
        dispatch(fetchProductsSuccess(data));
      } catch (error) {
        dispatch(fetchProductsFailure(error.message));
      }
    };
  };
  
  const fetchProductsRequest = () => ({
    type: FETCH_PRODUCTS_REQUEST
  });
  
  const fetchProductsSuccess = data => ({
    type: FETCH_PRODUCTS_SUCCESS,
    payload: data
  });

  const fetchProductsFailure = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: error
  });
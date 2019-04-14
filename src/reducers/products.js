import {
  GET_PRODUCTS_SUCCESS,
} from 'actions/constants';

const INITIAL_STATE = {
  products: [],
};

const getProductsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [...payload],
      };
    default:
      return state;
  }
}

export default getProductsReducer;

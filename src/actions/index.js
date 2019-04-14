import{
  GET_PRODUCTS_START,
  GET_PRODUCTS_SUCCESS,
  GET_TOKEN_START,
  GET_TOKEN_SUCCESS,
  GET_FAILURE,
} from './constants';

export const getProductsStart = () => {
  return {
    type: GET_PRODUCTS_START,
  };
};

export const getProductsSuccess = ( payload ) => {
  console.log('get products success action: ', payload);
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload,
  };
};

export const getTokenStart = () => {
  return {
    type: GET_TOKEN_START,
  };
};

export const getTokenSuccess = ( payload ) => {
  console.log('get token success action: ', payload);
  return {
    type: GET_TOKEN_SUCCESS,
    payload,
  };
};

export default {};

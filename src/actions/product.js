import history from '../history'
import shop from '../apis/shop';

import {FETCH_PRODUCTS} from './types'

export const fetchProducts = () => async dispatch => {
  try {
    const response = await shop.get('/Products');
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  } catch (error) {
    history.push('/error');
  }
}
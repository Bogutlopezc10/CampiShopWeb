import history from '../history'
import shop from '../apis/shop';

import { FETCH_PRODUCTS, CHANGE_FILTER_CATEGORY } from './types'

export const fetchProducts = () => async dispatch => {
  try {
    const response = await shop.get('/ProductSpecifications');
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  } catch (error) {
    history.push('/error');
  }
}

export const changeFilterCategory = (filterValue) => dispatch => {
  dispatch({ type: CHANGE_FILTER_CATEGORY, payload: filterValue });
}

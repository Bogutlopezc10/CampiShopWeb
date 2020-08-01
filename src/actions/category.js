import history from '../history'
import shop from '../apis/shop';

import {
  FETCH_CATEGORIES,
  CHANGE_FILTER_CATEGORY_CREATE_PRODUCT
} from './types'

export const fetchCategories = () => async dispatch => {
  try {
    const response = await shop.get('/Categories');
    dispatch({ type: FETCH_CATEGORIES, payload: response.data });
  } catch (error) {
    history.push('/error');
  }
}

export const changeFilterCategoryCreateProduct = (filterValue) => dispatch => {
  dispatch({ type: CHANGE_FILTER_CATEGORY_CREATE_PRODUCT, payload: filterValue });
}

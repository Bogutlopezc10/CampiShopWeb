import history from '../history'
import shop from '../apis/shop';

import { FETCH_PRODUCT_SPECIFICATIONS } from './types'

export const fetchProductSpecifications = (id) => async dispatch => {
  try {
    const response = await shop.get(`/ProductSpecifications/GetByProductId/${id}`);
    dispatch({ type: FETCH_PRODUCT_SPECIFICATIONS, payload: response.data });
  } catch (error) {
    history.push('/error');
  }
}

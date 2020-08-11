import history from '../history'
import shop from '../apis/shop';
import {CURRENT_USER} from '../actions/types'

import {
  FETCH_SHOOPING_CARTS_BY_USERNAME
} from './types'

export const fetchShoppingCartsByUsername = () => async dispatch => {
  try {
    const username = CURRENT_USER;
    const response = await shop.get(`/ShoppingCarts/GetByUsername/${username}`);
    dispatch({ type: FETCH_SHOOPING_CARTS_BY_USERNAME, payload: response.data });
  } catch (error) {
    history.push('/error');
  }
}

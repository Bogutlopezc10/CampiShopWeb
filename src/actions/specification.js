import history from '../history'
import shop from '../apis/shop';

import { FETCH_SPECIFICATIONS } from './types'

export const fetchSpecifications = () => async dispatch => {
  try {
    const response = await shop.get('/Specifications');
    dispatch({ type: FETCH_SPECIFICATIONS, payload: response.data });
  } catch (error) {
    history.push('/error');
  }
}

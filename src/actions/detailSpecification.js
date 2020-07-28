import history from '../history'
import shop from '../apis/shop';

import { FETCH_DETAIL_SPECIFICATIONS } from './types'

export const fetchDetailSpecifications = (id) => async dispatch => {
  try {
    const response = await shop.get(`/DetailSpecifications/BySpecification/${id}`);
    dispatch({ type: FETCH_DETAIL_SPECIFICATIONS, payload: response.data });
  } catch (error) {
    history.push('/error');
  }
}

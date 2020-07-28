import history from '../history'
import shop from '../apis/shop';
import { store } from '../index'
import _ from 'lodash';

import {
  FETCH_DETAIL_SPECIFICATIONS,
  CHANGE_FILTER_DETAIL_SPECIFICATION
} from './types'

export const fetchDetailSpecifications = (id) => async dispatch => {
  try {
    const response = await shop.get(`/DetailSpecifications/BySpecification/${id}`);
    dispatch({ type: FETCH_DETAIL_SPECIFICATIONS, payload: response.data });
  } catch (error) {
    history.push('/error');
  }
}

export const changeFilterDetailSpecification = (specificationId, detailSpecificationId, isChecked) => dispatch => {
  const state = store.getState();
  let filterDetailSpecifications = state.products.filterDetailSpecification;
  if (isChecked) {
    if (filterDetailSpecifications.hasOwnProperty(specificationId)) {
      const newFilter = filterDetailSpecifications[specificationId].concat(parseInt(detailSpecificationId));
      filterDetailSpecifications[specificationId] = newFilter;
    }
    else {
      const filter = { [specificationId]: [parseInt(detailSpecificationId)] }
      _.defaults(filterDetailSpecifications, filter);
    }
  }
  else {
    if (filterDetailSpecifications[specificationId].length === 1) {
      delete filterDetailSpecifications[specificationId];
    }
    else {
      const deleteFilter = filterDetailSpecifications[specificationId].filter(d => d !== parseInt(detailSpecificationId));
      filterDetailSpecifications[specificationId] = deleteFilter;
    }
  }
  dispatch({ type: CHANGE_FILTER_DETAIL_SPECIFICATION, payload: filterDetailSpecifications });
}

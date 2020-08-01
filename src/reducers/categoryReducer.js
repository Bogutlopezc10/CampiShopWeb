import _ from 'lodash';
import {
  FETCH_CATEGORIES,
  CHANGE_FILTER_CATEGORY_CREATE_PRODUCT
} from '../actions/types';

const defaultState = {
  data: {},
  isSuccess: false,
  messageSuccess: null,
  isLoading: true,
  filter: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        data: { ...state.data, ..._.mapKeys(action.payload, 'id') },
        isLoading: false
      };
    case CHANGE_FILTER_CATEGORY_CREATE_PRODUCT:
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
}

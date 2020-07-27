import _ from 'lodash';
import {
  FETCH_PRODUCT_SPECIFICATIONS
} from '../actions/types';

const defaultState = {
  data: {},
  isSuccess: false,
  messageSuccess: null,
  isLoading: true,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_SPECIFICATIONS:
      return {
        ...state,
        data: { ...state.data, ..._.mapKeys(action.payload, 'id') },
        isLoading: false
      };
    default:
      return state;
  }
}

import _ from 'lodash';
import {
  FETCH_SHOOPING_CARTS_BY_USERNAME
} from '../actions/types';

const defaultState = {
  data: {},
  isSuccess: false,
  messageSuccess: null,
  isLoading: true,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_SHOOPING_CARTS_BY_USERNAME:
      return {
        ...state,
        data: { ...state.data, ..._.mapKeys(action.payload, 'id') },
        isLoading: false
      };
    default:
      return state;
  }
}

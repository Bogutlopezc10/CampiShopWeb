import _ from 'lodash';
import {
  FETCH_PRODUCTS,
  CHANGE_FILTER_CATEGORY
} from '../actions/types';

const defaultState = {
  data: {},
  isSuccess: false,
  messageSuccess: null,
  isLoading: true,
  filter: 'All',
  filterDetailSpecification:{}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        data: { ...state.data, ..._.mapKeys(action.payload, 'productId') },
        isLoading: false
      };
    case CHANGE_FILTER_CATEGORY:
      return{
        ...state,
        filter: action.payload
      }
    default:
      return state;
  }
}

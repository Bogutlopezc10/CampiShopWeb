import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import productReducer from './productReducer';
import detailSpecificationReducer from './detailSpecificationReducer';

export default combineReducers({
  products: productReducer,
  productSpecifications: detailSpecificationReducer,
  form: formReducer
});

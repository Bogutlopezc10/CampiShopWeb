import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import productReducer from './productReducer';
import productSpecificationReducer from './productSpecificationReducer';
import categoryReducer from '../reducers/categoryReducer'

export default combineReducers({
  products: productReducer,
  productSpecifications: productSpecificationReducer,
  categories: categoryReducer,
  form: formReducer
});

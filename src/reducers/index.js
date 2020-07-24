import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import productReducer from './productReducer';
import detailSpecificationReducer from './detailSpecificationReducer';
import categoryReducer from '../reducers/categoryReducer'

export default combineReducers({
  products: productReducer,
  productSpecifications: detailSpecificationReducer,
  categories: categoryReducer,
  form: formReducer
});

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import productReducer from './productReducer';
import productSpecificationReducer from './productSpecificationReducer';
import categoryReducer from '../reducers/categoryReducer'
import specificationReducer from '../reducers/specificationReducer'
import detailSpecificationReducer from '../reducers/detailSpecificationReducer'

export default combineReducers({
  products: productReducer,
  productSpecifications: productSpecificationReducer,
  categories: categoryReducer,
  specifications: specificationReducer,
  details: detailSpecificationReducer,
  form: formReducer
});

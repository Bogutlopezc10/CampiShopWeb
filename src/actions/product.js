import history from '../history'
import shop from '../apis/shop';

import { FETCH_PRODUCTS, CHANGE_FILTER_CATEGORY, CREATE_PRODUCT } from './types'

export const fetchProducts = () => async dispatch => {
  try {
    const response = await shop.get('/ProductSpecifications');
    dispatch({ type: FETCH_PRODUCTS, payload: response.data });
  } catch (error) {
    history.push('/error');
  }
}

export const changeFilterCategory = (filterValue) => dispatch => {
  dispatch({ type: CHANGE_FILTER_CATEGORY, payload: filterValue });
}

export const createCourse = (formValues, formData) => async (dispatch) => {

  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    };

    const response = await shop.post(`Products/SavePhoto`, formData, config)
    const objProduct = {}
    objProduct.name = formValues.name;
    objProduct.price = formValues.price;
    objProduct.description = formValues.description;
    objProduct.amount = formValues.amount;
    objProduct.color = formValues.color;
    objProduct.photo = response;

    //delete some keys
    delete formValues.name;
    delete formValues.price;
    delete formValues.description;
    delete formValues.amount;
    delete formValues.color;
    delete formValues.photo;

    const listDetailsSpecifications = Object.values(formValues);
    const ans = {
      createProductCommand: objProduct,
      detailSpecifications: listDetailsSpecifications
    }
    const responseProduct = await shop.post('Products', ans)

    dispatch({ type: CREATE_PRODUCT, payload: responseProduct.data })
    history.push('/products');
  }
  catch (error) {
    history.push('/error');
  }
};

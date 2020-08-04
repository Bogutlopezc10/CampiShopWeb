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

export const createProduct = (formValues, formData) => async () => {

  try {

    const response = await shop.post(`Products/SavePhoto`, formData)
    const objProduct = {}
    objProduct.name = formValues.name;
    objProduct.price = parseInt(formValues.price);
    objProduct.description = formValues.description;
    objProduct.amount = parseInt(formValues.amount);
    objProduct.color = formValues.color;
    objProduct.photo = "photo.png";

    //delete some keys
    delete formValues.name;
    delete formValues.price;
    delete formValues.description;
    delete formValues.amount;
    delete formValues.color;
    delete formValues.photo;
    delete formValues.categoryId;

    const listDetailsSpecifications = Object.values(formValues);
    const converterlistDetailsSpecifications = listDetailsSpecifications.map((x) => {
      return parseInt(x);
    })

    const ans = {
      createProductCommand: objProduct,
      detailSpecifications: converterlistDetailsSpecifications
    }
    const responseProduct = await shop.post('Products', ans)

    dispatch({ type: CREATE_PRODUCT, payload: responseProduct.data })
    history.push('/products');
  }
  catch (error) {
    history.push('/error');
  }
};

import { store } from '../index'
import { CURRENT_USER } from '../actions/types'

// Products
export const getProducts = () => {
  const state = store.getState();
  const filter = state.products.filter;
  const detailSpecifications = state.products.filterDetailSpecification;
  let filterByDetails = [];
  let data = Object.values(state.products.data)
  if (filter === 'All') {
    return data;
  } else {
    data = data.filter(product => product.categoryId === parseInt(filter));
    for (let variable in detailSpecifications) {
      filterByDetails = detailSpecifications[variable];
      let filterByDetailsSet = new Set(filterByDetails);
      data = data.filter((o) =>
        o.detailSpecificationsId.some((detail) => filterByDetailsSet.has(detail))
      );
    }
    return data;
  }
}

// Product Specifications
export const getProductSpecificationsByProductId = (productId) => {
  const state = store.getState();
  const data = Object.values(state.productSpecifications.data);
  return data.filter(d => d.productId === parseInt(productId));
}

// Categories
export const getCategories = () => {
  const state = store.getState();
  return Object.values(state.categories.data);
}

//Specifications
export const getSpecificationsByCategoryId = () => {
  const state = store.getState();
  const filter = state.products.filter;
  const data = Object.values(state.specifications.data);

  if (filter !== 'All') {
    return data.filter(s => s.categoryId === parseInt(filter));
  }
  return [];
}

//Specifications to create a product
export const getSpecifications = () => {
  const state = store.getState();
  const filter = state.categories.filter;
  const data = Object.values(state.specifications.data);

  if (filter !== null) {
    return data.filter(s => s.categoryId === parseInt(filter));
  }
  return [];
}

export const getDetailSpecificationBySpecificationId = (specificationId) => {
  const state = store.getState();
  const data = Object.values(state.details.data);
  return data.filter(d => d.specificationId === parseInt(specificationId))
}

export const getShoopingCartsByUsername = () => {
  const state = store.getState();
  const data =  Object.values(state.shoppingCarts.data);

  return data.filter(s => s.username === CURRENT_USER)
}

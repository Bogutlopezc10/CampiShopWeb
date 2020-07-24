import { store } from '../index'
// Products
export const getProducts = () => {
  const state = store.getState();
  const filter = state.products.filter;
  const data = Object.values(state.products.data)
  if (filter === 'All') {
    return data;
  }
  return data.filter(p => p.categoryName === filter);
}

export const getProductSpecificationsByProductId = (productId) => {
  const state = store.getState();
  const data = Object.values(state.productSpecifications.data);

  return data.filter(d => d.productId === parseInt(productId));
}

export const getCategories = () => {
  const state = store.getState();

  return Object.values(state.categories.data);
}

import { store } from '../index'

// Products
export const getProducts = () => {
  const state = store.getState();
  const filter = state.products.filter;
  const detailSpecifications = state.products.filterDetailSpecification;
  let filterByDetails = [];
  let data = Object.values(state.products.data)
  if (filter === 'All') {
    return data;
  }else{
    data = data.filter(product => product.categoryId === parseInt(filter));
    for (let variable in detailSpecifications) {
      filterByDetails = detailSpecifications[variable].detailSpecificationsId;
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

import { store } from '../index'
// Products
export const getProducts = () => {
  const state = store.getState();
  const filter = state.products.filter;
  if(filter === 'All'){
    const data = Object.values(state.products.data)
    return data;
  }
}

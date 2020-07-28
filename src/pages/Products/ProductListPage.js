import React from 'react'
import ProductListContainer from '../../containers/products/ProductListContainer'
import FilterContainer from '../../containers/FilterContainer'

const ProductListPage = () => {
  return (
    <>
      <FilterContainer />
      <ProductListContainer />
    </>
  )
}

export default ProductListPage;

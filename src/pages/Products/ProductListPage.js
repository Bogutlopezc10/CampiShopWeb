import React from 'react'
import ProductListContainer from '../../containers/products/ProductListContainer'
import CategoryListContainer from '../../containers/categories/CategoryListContainer'

const ProductListPage = () => {
  return (
    <>
      <CategoryListContainer />
      <ProductListContainer />
    </>
  )
}

export default ProductListPage;

import React from 'react'
import ProductListContainer from '../../containers/products/ProductListContainer'
import CategoryListContainer from '../../containers/categories/CategoryListContainer'
import SpecificationsListContainer from '../../containers/specifications/SpecificationsListContainer'

const ProductListPage = () => {
  return (
    <>
      <CategoryListContainer />
      <ProductListContainer />
      <SpecificationsListContainer />
    </>
  )
}

export default ProductListPage;

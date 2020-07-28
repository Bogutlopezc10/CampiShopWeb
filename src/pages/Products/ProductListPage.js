import React from 'react'
import ProductListContainer from '../../containers/products/ProductListContainer'
import CategoryListContainer from '../../containers/categories/CategoryListContainer'
import SpecificationsListContainer from '../../containers/specifications/SpecificationsListContainer'

const ProductListPage = () => {
  return (
    <div style = {{marginTop: '90px'}}>
      <ProductListContainer />
      <CategoryListContainer />
      <SpecificationsListContainer />
    </div>
  )
}

export default ProductListPage;

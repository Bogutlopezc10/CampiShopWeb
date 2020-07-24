import React from 'react'
import ProductListContainer from '../../containers/products/ProductListContainer'
import CategoryListContainer from '../../containers/categories/CategoryListContainer'

const ProductListPage = () => {
  return (
    <div style = {{marginTop: '90px'}}>
      <ProductListContainer />
      <CategoryListContainer />
    </div>
  )
}

export default ProductListPage;

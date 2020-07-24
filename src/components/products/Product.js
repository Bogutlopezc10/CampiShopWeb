import React from 'react'
import ProductSpecificationListContainer from '../../containers/productSpecifications/ProductSpecificationListContainer'
import CategoryListContainer from '../../containers/categories/CategoryListContainer'

const Product = (props) => {
  const renderData = () => {
    const { product } = props;
    return (
      <div>
        <h1>{product.productName}</h1>
        <p>{product.productDescription}</p>
        <i>{product.productPrice}</i>
        <ProductSpecificationListContainer
          productId = {product.productId}
        />
        <CategoryListContainer />
      </div>
    )
  }
  
  return (
    <div>
      {renderData()}
    </div>
  )
}

export default Product;

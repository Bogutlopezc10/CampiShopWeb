import React from 'react'
import ProductSpecificationListContainer from '../../containers/productSpecifications/ProductSpecificationListContainer'

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

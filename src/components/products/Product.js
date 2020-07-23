import React from 'react'

const Product = (props) => {
  const renderData = () => {
    const { product } = props;
    return (
      <div>
        <h1>{product.productName}</h1>
        <p>{product.productDescription}</p>
        <i>{product.productPrice}</i>
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

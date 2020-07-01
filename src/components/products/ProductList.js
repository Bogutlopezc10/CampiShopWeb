import React from 'react'
import Product from '../../components/products/Product'

const ProductList = (props) => {
  const renderData = () => {
    const { products, loading } = props;
    if (products.length === 0 && loading) {
      return (
        <div>Loading...........</div>
      )
    }

    if (products.length === 0 && !loading) {
      return (
        <div>No hay data</div>
      )
    }
    return (
      products.map(product =>
        <Product
          key={product.id}
          product={product}
        />
      )
    )
  }
  
  return (
    renderData()
  )
}

export default ProductList;

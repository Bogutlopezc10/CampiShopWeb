import React from 'react'
import './Product.css'
import Loader from 'react-loader-spinner'
import Product from '../../components/products/Product'

const ProductList = (props) => {
  const renderData = () => {
    const { products, loading } = props;
    if (products.length === 0 && loading) {
      return (
        <div className="container-loader">
          <div className="main-loader">
            <Loader type="Bars" color="#ec0d14" height={80} width={80} />
          </div>
        </div>        
      )
    }

    if (products.length === 0 && !loading) {
      return (
        <div>No hay data</div>
      )
    }
    return (
      <div className="container-products">
        <div className="row">
          {products.map(product =>
            <Product
              key={product.id}
              product={product}
            />
          )}
        </div>
      </div>
    )
  }
  
  return (
    renderData()
  )
}

export default ProductList;

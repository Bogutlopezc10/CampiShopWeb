import React from 'react'
import './Product.css'
import Loader from 'react-loader-spinner'
import { BsFilter } from "react-icons/bs";
import Product from '../../components/products/Product'

const ProductList = (props) => {
  const renderData = () => {
    const { products, loading } = props;
    if (products.length === 0 && loading) {
      return (
        <div className="container-loader">
          <div className="main-loader">
            <Loader type="Bars" color="#ec0d14" height={60} width={60} />
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
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-auto title-products">
            <h2>Products list</h2>
          </div>
          <div className="col-auto icon-filter">
            <BsFilter />
          </div>
        </div>
        <hr></hr>
        <div className="row mt-2">
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

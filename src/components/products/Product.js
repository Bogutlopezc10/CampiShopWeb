import React from 'react'
import NumberFormat from 'react-number-format';
import ProductSpecificationListContainer from '../../containers/productSpecifications/ProductSpecificationListContainer'

const Product = (props) => {
  const renderData = () => {
    const { product } = props;
    return (
      <div className="card shadow-sm h-100">
        <img className="card-img-top" src="/Asus.jpg" alt="Card product cap" />
        <div className="card-body">
          <h5 className="card-title">{product.productName}</h5>
          <p className="card-text">{product.productDescription}</p>
          <h6 className="card-specification">Specifications</h6>
          <div className="mb-2">
            <ProductSpecificationListContainer
              productId={product.productId}
            />
          </div>
          <br></br>
          <div className="color-product" style={{backgroundColor:"#0062cc"}}></div>
          <h6 className="card-price"><NumberFormat value={product.productPrice} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h6>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
        {renderData()}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
        {renderData()}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
        {renderData()}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
        {renderData()}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
        {renderData()}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
        {renderData()}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
        {renderData()}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
        {renderData()}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
        {renderData()}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
        {renderData()}
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mb-4">
        {renderData()}
      </div>
    </>
  )
}

export default Product;

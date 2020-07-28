import React from 'react'
import './ProductSpecification.css';

const ProductSpecification = ({ specification }) => {
  return (
    <h6 className="specification-name">- {specification.specificationName}: <span>{specification.detailSpecificationName}</span></h6>
  );
}

export default ProductSpecification;

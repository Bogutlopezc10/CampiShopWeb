import React from 'react'

const ProductSpecification = ({ specification }) => {

  return (
    <h5>{specification.specificationName}: <span style = {{fontWeight: 'normal', fontSize: '16px'}}>{specification.detailSpecificationName}</span></h5>
  );
}

export default ProductSpecification;

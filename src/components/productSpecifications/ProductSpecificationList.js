import React from 'react'
import ProductSpecification from '../../components/productSpecifications/ProductSpecification'

const ProductSpecificationList = ({ specifications, loading }) => {

  const renderData = () => {
    if (specifications.length === 0 && loading) {
      return (
        <div>Loading...........</div>
      )
    }
    if (specifications.length === 0 && !loading) {
      return (
        <div>No hay data</div>
      )
    }
    return (
      specifications.map(specification =>
        <ProductSpecification
          key={specification.id}
          specification={specification}
        />
      )
    )
  }
  return (
    renderData()
  )
}

export default ProductSpecificationList;

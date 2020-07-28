import React from 'react'
import Loader from 'react-loader-spinner'
import ProductSpecification from '../../components/productSpecifications/ProductSpecification'

const ProductSpecificationList = ({ specifications, loading }) => {

  const renderData = () => {
    if (specifications.length === 0 && loading) {
      return (
        <div className="text-center">
          <Loader type="ThreeDots" color="#ec0d14" height={40} width={40} />
        </div>
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

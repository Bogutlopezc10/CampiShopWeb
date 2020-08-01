import React from 'react'
import SpecificationCreateProduct from '../../components/specifications/SpecificationCreateProduct'

const SpecificationCreateProductList = ({ specifications, register }) => {

  const renderData = () => {
    return (
      specifications.map(specification =>
        <SpecificationCreateProduct
          key={specification.id}
          specification={specification}
          register = {register}
        />
      )
    )
  }

  return (
    renderData()
  )
}

export default SpecificationCreateProductList;

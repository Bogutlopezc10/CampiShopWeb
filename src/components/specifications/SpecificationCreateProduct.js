import React from 'react'
import DetailProductCreateListContainer from '../../containers/detailSpecifications/DetailProductCreateListContainer'

const SpecificationCreateProduct = ({ specification, register }) => {

  return (
    <>
      <select
        name={specification.name} 
        className="form-control mb-2"
        ref={register}
      >
        <DetailProductCreateListContainer
          specificationId={specification.id}
        />
      </select>
    </>
  )
}
export default SpecificationCreateProduct;

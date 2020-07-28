import React from 'react'
import DetailSpecificationListContainer from '../../containers/detailSpecifications/DetailSpecificationListContainer'

const Specification = ({ specification }) => {

  return(
    <>
      <h1>{specification.name}</h1>
      <DetailSpecificationListContainer
        specificationId = {specification.id}
      />
    </>
  );
}
export default Specification;

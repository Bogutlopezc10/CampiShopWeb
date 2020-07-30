import React from 'react'
import DetailSpecificationListContainer from '../../containers/detailSpecifications/DetailSpecificationListContainer'

const Specification = ({ specification }) => {

  return(
    <>
      <hr></hr>
      <h4>{specification.name}</h4>
      <DetailSpecificationListContainer
        specificationId = {specification.id}
      />
    </>
  );
}
export default Specification;

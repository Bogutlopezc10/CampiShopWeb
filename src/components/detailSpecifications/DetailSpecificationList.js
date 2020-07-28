import React from 'react'
import DetailSpecification from '../../components/detailSpecifications/DetailSpecification'

const DetailSpecificationList = ({ details }) => {

  const renderData = () => {

    if(details.length === 0){
      return(
        <div>Loading....</div>
      )
    }
    return(
      details.map(detail =>
        <DetailSpecification
          key = {detail.id}
          detail = {detail}
        />
      )
    )
  }
  return(
    renderData()
  )
}

export default DetailSpecificationList;

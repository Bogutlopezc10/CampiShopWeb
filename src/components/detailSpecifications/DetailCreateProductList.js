import React from 'react'
import DetailCreateProduct from '../../components/detailSpecifications/DetailCreateProduct'

const DetailCreateProductList = ({ details }) => {

  const renderData = () => {
    return (
      details.map(detail =>
        <DetailCreateProduct
          key={detail.id}
          detail={detail}
        />
      )
    )
  }
  return(
    renderData()
  )
}

export default DetailCreateProductList;

import React from 'react'

const DetailCreateProduct = ({detail}) => {

  return(
    <option value = {detail.id}>{detail.name}</option>
  )
}

export default DetailCreateProduct;

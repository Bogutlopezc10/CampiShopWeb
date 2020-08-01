import React from 'react'
import ProductForm from '../../components/products/ProductForm'

const ProductCreate = ({ categories, onChangeFilter, loading, onSubmitInfo }) => {
  return (
    <ProductForm
      categories={categories}
      onChangeFilter = {onChangeFilter}
      loading = {loading}
      onSubmitInfo = {onSubmitInfo}
    />
  )
}

export default ProductCreate;

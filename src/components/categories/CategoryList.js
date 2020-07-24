import React from 'react'
import Category from '../../components/categories/Category'

const CategoryList = ({ categories, loading }) => {

  const renderData = () => {
    if (categories.length === 0 && !loading) {
      return (
        <div>No hay data</div>
      )
    }
    if (categories.length === 0 && loading) {
      return (
        <div>
          loading.......
        </div>
      )
    }
    return (
      categories.map(category =>
        <Category
          category={category}
        />
      )
    )
  }
  return (
    renderData()
  )
}

export default CategoryList;

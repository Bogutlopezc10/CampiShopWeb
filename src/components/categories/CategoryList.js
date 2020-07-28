import React from 'react'
import './Category.css'
import Category from '../../components/categories/Category'

const CategoryList = ({ categories, loading, onChangeFilter }) => {

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
      <div className="container-filters">
        <div className="mt-4">
          {categories.map(category =>
            <Category
              category={category}
              onChangeFilter={onChangeFilter}
            />
          )}
        </div>
      </div>
    )
  }
  return (
    renderData()
  )
}

export default CategoryList;

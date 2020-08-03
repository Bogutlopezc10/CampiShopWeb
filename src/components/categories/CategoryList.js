import React from 'react'
import './Category.css'
import Loader from 'react-loader-spinner'
import Category from '../../components/categories/Category'

const CategoryList = ({ categories, loading, onChangeFilter }) => {

  const renderData = () => {
    if (categories.length === 0 && loading) {
      return (
        <div className="container-category-loader">
          <div className="category-loader">
            <Loader type="Bars" color="#545b62" height={40} width={40} />
          </div>
        </div>
      )
    }
    return (
      <div className="container">
        <div className="row category-filters">
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

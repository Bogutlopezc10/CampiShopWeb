import React from 'react'
import CategoryListContainer from '../containers/categories/CategoryListContainer'
import SpecificationsListContainer from '../containers/specifications/SpecificationsListContainer'
import './Filter.css'

const Filter = () => {
  return (
    <div className="container-filters">
      <div className="mt-3">
        <h4 className="filter-title">Filters</h4>
        <CategoryListContainer />
        <SpecificationsListContainer />
      </div>
    </div>
  )
}

export default Filter;

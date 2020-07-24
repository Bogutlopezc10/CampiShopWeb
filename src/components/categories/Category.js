import React from 'react'

const Category = ({ category, onChangeFilter }) => {

  const handleChangeFilter = (e) => {
    onChangeFilter(e.target.value);
  }
  return (
    <>
      <label>{category.name}</label>
      <input type="radio" name="category" value={category.name} onChange={(e) => handleChangeFilter(e)} />
    </>
  )
}

export default Category;

import React from 'react'
import { FaMobileAlt, FaLaptop, FaDesktop, FaTabletAlt, FaAngleDoubleRight } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";

const Category = ({ category, onChangeFilter }) => {
  const handleChangeFilter = (e) => {
    onChangeFilter(e.target.value);
  }

  const renderIcon = () => {
    if(category.id === 1){
      return <FaLaptop />
    }else if(category.id === 2){
      return <FaDesktop />
    }
  }

  return (
    <>
      <input type="radio" name="category" id={category.id} value={category.id} onChange={(e) => handleChangeFilter(e)}/>
      <label for={category.id}>
        {renderIcon()}
        <span>{category.name}</span>
      </label>
      <input type="radio" name="category" id={category.id} value={category.id} onChange={(e) => handleChangeFilter(e)}/>
      <label for={category.id}>
        {renderIcon()}
        <span>{category.name}</span>
      </label>
    </>
  )
}

export default Category;

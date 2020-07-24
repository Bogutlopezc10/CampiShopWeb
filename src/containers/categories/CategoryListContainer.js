import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../selectors/index'
import { changeFilterCategory } from '../../actions/product'
import { fetchCategories } from '../../actions/category'
import CategoryList from '../../components/categories/CategoryList'

const CategoryListContainer = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const loading = useSelector(store => store.categories.isLoading);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])

  const onChangeFilter = (filterValue) => {
    dispatch(changeFilterCategory(filterValue))
  }

  return (
    <CategoryList
      categories = {categories}
      loading = {loading}
      onChangeFilter = {onChangeFilter}
    />
  )
}

export default CategoryListContainer;

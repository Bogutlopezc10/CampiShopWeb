import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../selectors/index'
import { fetchCategories } from '../../actions/category'
import CategoryList from '../../components/categories/CategoryList'

const CategoryListContainer = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const loading = useSelector(store => store.categories.isLoading);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])
  return (
    <CategoryList
      categories = {categories}
      loading = {loading}
    />
  )
}

export default CategoryListContainer;

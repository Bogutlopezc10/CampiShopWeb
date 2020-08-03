import React, { useEffect } from 'react'
import ProductCreate from '../../components/products/ProductCreate'
import { changeFilterCategoryCreateProduct } from '../../actions/category'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../../actions/product'
import { getCategories } from '../../selectors/index'
import { fetchCategories } from '../../actions/category'

const ProductCreateContainer = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const loading = useSelector(store => store.categories.isLoading)
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const onChangeFilter = (e) => {
    dispatch(changeFilterCategoryCreateProduct(e))
  }

  const onSubmitInfo = (formValues, formData) => {
    dispatch(createProduct(formValues,formData));
  }
  return (
    <ProductCreate
      categories = {categories}
      onChangeFilter = {onChangeFilter}
      loading = {loading}
      onSubmitInfo = {onSubmitInfo}
    />
  )
}

export default ProductCreateContainer;

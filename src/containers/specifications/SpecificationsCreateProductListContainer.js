import React from 'react'
import SpecificationCreateProductList from '../../components/specifications/SpecificationCreateProductList'
import { fetchSpecifications } from '../../actions/specification'
import { getSpecifications } from '../../selectors/index'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'

const SpecificationsCreateProductListContainer = ({ register }) => {
  const dispatch = useDispatch();
  const specifications = useSelector(getSpecifications);

  useEffect(() => {
    dispatch(fetchSpecifications());
  }, [dispatch])

  return (
    <SpecificationCreateProductList
      specifications={specifications}
      register = {register}
    />
  )
}

export default SpecificationsCreateProductListContainer;

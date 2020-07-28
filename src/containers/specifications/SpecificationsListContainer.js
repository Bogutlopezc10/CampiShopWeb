import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { getSpecificationsByCategoryId } from '../../selectors/index'
import SpecificationList from '../../components/specifications/SpecificationList'
import { fetchSpecifications } from '../../actions/specification'

const SpecificationsListContainer = () => {
  const dispatch = useDispatch();
  const specifications = useSelector(getSpecificationsByCategoryId);
  const loading = useSelector(store => store.specifications.isLoading);

  useEffect(() => {
    dispatch(fetchSpecifications());
  }, [dispatch])
  return(
    <SpecificationList
      specifications = {specifications}
      loading = {loading}
    />
  )
}

export default SpecificationsListContainer;

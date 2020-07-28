import React from 'react'
import { changeFilterDetailSpecification } from '../../actions/detailSpecification'
import { useDispatch } from 'react-redux';

const DetailSpecification = ({ detail, specificationId }) => {
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const target = e.target;
    dispatch(changeFilterDetailSpecification(specificationId, target.value, target.checked))
  }

  return (
    <>
      <h4>
        {detail.name}
      </h4>
      <input type="checkbox" name={detail.name} value={detail.id} onChange={(e) => onHandleChange(e)} />
    </>
  )

}

export default DetailSpecification;

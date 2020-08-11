import React from 'react'
import { changeFilterDetailSpecification } from '../../actions/detailSpecification'
import './DetailSpecification.css'
import { useDispatch } from 'react-redux';

const DetailSpecification = ({ detail, specificationId }) => {
  const dispatch = useDispatch();

  const onHandleChange = (e) => {
    const target = e.target;
    dispatch(changeFilterDetailSpecification(specificationId, target.value, target.checked))
  }

  return (
    <div className="form-check">
      <input type="checkbox" name={detail.name} value={detail.id} onChange={(e) => onHandleChange(e)} />
      <label className="form-check-label" htmlFor={detail.id}>{detail.name}</label>
    </div>
  )
}

export default DetailSpecification;

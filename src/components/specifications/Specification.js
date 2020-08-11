import React, { useState } from 'react'
import { Collapse } from 'reactstrap';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import './Specification.css'
import DetailSpecificationListContainer from '../../containers/detailSpecifications/DetailSpecificationListContainer'

const Specification = ({ specification }) => {
  const [collapse, setToggle] = useState(false);

  const renderIcon = () => {
    if(collapse){
      return <FaAngleUp onClick={() => setToggle(!collapse)} />
    }else{
      return <FaAngleDown onClick={() => setToggle(!collapse)} />
    }
  }

  return (
    <>
      <hr></hr>
      <div className="row d-flex justify-content-between align-items-center specification-header">
        <h4>{specification.name}</h4>
        {renderIcon()}
      </div>
      <Collapse isOpen={collapse}>
        <DetailSpecificationListContainer
          specificationId={specification.id}
        />
      </Collapse>
    </>
  );
}
export default Specification;

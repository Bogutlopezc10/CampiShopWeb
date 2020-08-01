import  React from 'react'
import Specification from '../../components/specifications/Specification'

const SpecificationList = ({ specifications, loading }) => {
  const renderData = () => {
    return (
      specifications.map(specification =>
        <Specification
          key={specification.id}
          specification={specification}
        />
      )
    )
  }
  return(
    <div className="container">
      {renderData()}
    </div>
  )
}

export default SpecificationList;

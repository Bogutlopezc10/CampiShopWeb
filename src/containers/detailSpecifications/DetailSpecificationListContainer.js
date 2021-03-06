import React from 'react'
import DetailSpecificationList from '../../components/detailSpecifications/DetailSpecificationList'
import { getDetailSpecificationBySpecificationId } from '../../selectors/index'
import { fetchDetailSpecifications } from '../../actions/detailSpecification'
import { connect } from 'react-redux';

class DetailSpecificationListContainer extends React.Component {

  componentDidMount(){
    const {specificationId} = this.props;
    this.props.fetchDetailSpecifications(specificationId);
  }
  render(){
    const {specificationId} = this.props;
    return(
      <DetailSpecificationList
        details = {this.props.details}
        specificationId = {specificationId}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) =>{
  return { 
      details: getDetailSpecificationBySpecificationId(ownProps.specificationId),
  }
}

export default connect(mapStateToProps, { fetchDetailSpecifications })(DetailSpecificationListContainer);

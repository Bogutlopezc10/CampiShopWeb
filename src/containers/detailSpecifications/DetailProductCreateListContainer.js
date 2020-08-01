import React from 'react'
import DetailCreateProductList from '../../components/detailSpecifications/DetailCreateProductList'
import { connect } from 'react-redux';
import { getDetailSpecificationBySpecificationId } from '../../selectors/index'
import { fetchDetailSpecifications } from '../../actions/detailSpecification'

class DetailProductCreateListContainer extends React.Component {

  componentDidMount() {
    const { specificationId } = this.props;
    this.props.fetchDetailSpecifications(specificationId);
  }

  render() {
    return (
      <DetailCreateProductList
        details = {this.props.details}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    details: getDetailSpecificationBySpecificationId(ownProps.specificationId),
  }
}

export default connect(mapStateToProps, { fetchDetailSpecifications })(DetailProductCreateListContainer);

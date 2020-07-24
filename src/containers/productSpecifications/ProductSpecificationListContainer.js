import React from 'react'
import { fetchProductSpecifications } from '../../actions/productSpecification'
import ProductSpecificationList from '../../components/productSpecifications/ProductSpecificationList'
import { getProductSpecificationsByProductId } from '../../selectors/index'
import { connect } from 'react-redux';

class ProductSpecificationListContainer extends React.Component {

  componentDidMount(){
    const {productId} = this.props;
    this.props.fetchProductSpecifications(productId);
  }
  render(){
    return(
      <ProductSpecificationList
        specifications = {this.props.specifications}
        loading = {this.props.loading}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) =>{
  return { 
      specifications: getProductSpecificationsByProductId(ownProps.productId),
      loading: state.productSpecifications.isLoading,
  }
}

export default connect(mapStateToProps, {fetchProductSpecifications})(ProductSpecificationListContainer);

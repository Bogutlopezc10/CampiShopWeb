import React from 'react'
import ProductList from '../../components/products/ProductList'
import {fetchProducts} from '../../actions/index'
import {useEffect} from 'react'
import {getProducts} from '../../selectors/index'
import {useDispatch, useSelector } from 'react-redux';

const ProductListContainer = () => {
    const dispatch = useDispatch();
    const products = useSelector(getProducts);
    const loading = useSelector(store => store.products.isLoading);
    useEffect(() => {
        dispatch(fetchProducts());
    },[])

    return(
        <ProductList
            products = {products}
            loading = {loading}
        />
    )
}

export default ProductListContainer;
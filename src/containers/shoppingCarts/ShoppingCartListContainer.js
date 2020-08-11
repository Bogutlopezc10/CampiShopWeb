import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchShoppingCartsByUsername } from '../../actions/shoppingCart'
import ShoppingCartList from '../../components/shoppingCarts/ShoppingCartList'
import { getShoopingCartsByUsername } from '../../selectors/index'

const ShoppingCartListContainer = () => {
  const dispatch = useDispatch();
  const loading = useSelector(store => store.shoppingCarts.isLoading);
  const shoopingCarts = useSelector(getShoopingCartsByUsername)
  useEffect(() => {
    dispatch(fetchShoppingCartsByUsername())
  }, [dispatch])
  return (
    <ShoppingCartList
      shoopingCarts={shoopingCarts}
      loading={loading}
    />
  )
}

export default ShoppingCartListContainer;

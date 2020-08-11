import React from 'react'
import ShoppingCart from '../../components/shoppingCarts/ShoppingCart'

const ShoppingCartList = ({ shoopingCarts, loading }) => {

  const renderData = () => {
    if (shoopingCarts.length === 0 && loading) {
      return <di>Loading......</di>
    }
    if (shoopingCarts.length === 0 && loading) {
      return <div>No hay data</div>
    }
    return (
      <div>
        {shoopingCarts.map(shoopingCart =>
          <ShoppingCart
            key={shoopingCart.id}
            shoopingCart={shoopingCart}
          />
        )}
      </div>
    )
  }
  return (
    renderData()
  )
}

export default ShoppingCartList;

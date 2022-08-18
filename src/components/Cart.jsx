import React from 'react'
import SingleProduct from './SingleProduct'

const Cart = ({cart, setCart}) => {
  return (
    <div>
      {cart.length !== 0 ? (
          cart.map((prod)=>(
            <SingleProduct 
              key={prod.id} 
              prod={prod}
              cart = {cart}
              setCart = {setCart}
            />
          ))
      ):(
        <div>
          No items in the cart
        </div>
      )}
    </div>
  )
}

export default Cart 
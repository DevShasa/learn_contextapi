import React, { useContext } from 'react';
import SingleProduct from './SingleProduct';
import styled from "styled-components";
import { cartContext } from '../context/CartContext';

const Cart = () => {
  const {cart, setCart} = useContext(cartContext)

  return (
    <>
      {cart.length !== 0 && (
        <PriceDisplay>
            Total Price{'  $'}
            {cart.reduce(
              (accumulator, arrayItem)=>(accumulator + Number(arrayItem.price)),0
            )}
        </PriceDisplay>
      )}
      <CartDiv>
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
      </CartDiv>
    </>
    )
}

export default Cart 

const CartDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1580px;
    margin: 0 auto;
`

const PriceDisplay = styled.div`
  font-size: 2rem;
  text-align:center;
`
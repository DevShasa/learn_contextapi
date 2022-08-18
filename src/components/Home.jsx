import React, { useState } from 'react';
import fakeData from '../utils/createFakeData';
import SingleProduct from './SingleProduct';
import styled from "styled-components";

const Home = ({ cart, setCart }) => {
  const [products] = useState(fakeData(20))

  return (
    <ProductArrayDisplay>
      {products.map((prod)=>(
        <SingleProduct 
            key={prod.id} 
            prod={prod}
            cart = {cart}
            setCart = {setCart}
        />
      ))}
    </ProductArrayDisplay>
  )
}

export default Home

const ProductArrayDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem;
  justify-content:center;

  max-width: 1580px;
  margin: 0 auto;
`
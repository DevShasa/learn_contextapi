import React from 'react';
import styled from 'styled-components';

const SingleProduct = ({prod, cart, setCart}) => {
    const {id,  name, price, image } = prod
    return (
        <SingleProductDiv>
            <img src={image}  alt={name}/>
            <div>
                <span>{name.substring(0, 14)}</span>
                <PriceSpan>${price}</PriceSpan>
            </div>

            {cart.some(({id}) =>id ===prod.id) ?(
                <CartButton onClick={()=>setCart(cart.filter((i)=>(i.id !== id)))}>
                    Remove from Cart
                </CartButton>
            ):(
                <CartButton onClick={()=>setCart([...cart, prod])}>
                    Add to cart
                </CartButton>
            )} 

        </SingleProductDiv>
    )
}

export default SingleProduct

const SingleProductDiv = styled.div`
    margin: 1rem;
    margin-block: 1rem;
    padding: 10px;
    border-radius: 20px;
    height: 350px;
    width: 300px;
    transition: all 0.2s linear;
    border: 1px solid #777777;
    background-color: #f3f3f3;

    &:hover{
        transform: scale(1.05);
    }

    >img{
        height: 250px;
        width: 100%;
        /* border: 2px solid red; */
        border-radius: 20px;
        object-fit:cover;
    }

    @media(max-width: 750px){
        width: 100%;
        height: 400px;
        margin-top: 2rem;
    }

    > div{
        text-align:center;

        >span{
            padding: 3px;
            font-size: 1.4rem;
        }
    }
`

const PriceSpan = styled.span`
    font-weight: bold;
`

const CartButton = styled.button`
    display: block;
    text-align: center;
    width: 100%;
    padding: 5px 10px;
    margin-top: 1rem;
    font-size: 1.1rem;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;

`;
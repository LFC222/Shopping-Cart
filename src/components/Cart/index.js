import React from 'react'
import 
{
  RemoveButton,
  CartContainer,
} from './styles'

function Cart({ name,price,index,handeRemoveCart }) {
  return (
    <CartContainer>
        <h2>{name}</h2>
        <span>R${price}</span>
        <RemoveButton 
          onClick={() => handeRemoveCart(index)}
        >
          Remover
        </RemoveButton>
    </CartContainer>
  )
}

export default Cart
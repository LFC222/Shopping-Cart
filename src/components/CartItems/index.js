import React from 'react'
import Cart from '../Cart'
import 
{
  ListItem,
  FooterContainer,
} from './styles'

function CartItems({ cart,handeRemoveCart }) {
  return (
    <FooterContainer>
        <ListItem>
          {
            cart.map((cartItem,index) => (
              <Cart 
                key={index}
                index={index}
                name={cartItem.name}
                price={cartItem.price}
                handeRemoveCart={handeRemoveCart}
              />
            ))
          }
        </ListItem>
      </FooterContainer>
  )
}

export default CartItems
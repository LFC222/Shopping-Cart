import React from 'react'
import 
{
  Bold,
  PriceItem,
  TextIndex,
  TotalItem,
  CleanButton,
  NavContainer,
  ActionContainer,
  HeaderContainer,
  ContainerDescription,
} from './styles'

function Navbar({ cart,clearCart }) {

  const totalPrice = cart.reduce((acc,current) => acc + current.price, 0)

  return (
    <HeaderContainer>
        <NavContainer>
          <TextIndex>CUR<Bold>SOS</Bold></TextIndex>
          <ActionContainer>
            <ContainerDescription>
              <TotalItem> {cart.length} {cart.length === 1 ? 'curso' : 'cursos'}</TotalItem>
              <PriceItem> R${totalPrice.toFixed(2)}</PriceItem>
            </ContainerDescription>
            <CleanButton onClick={() => clearCart()}>Limpar</CleanButton>
          </ActionContainer>
        </NavContainer>
      </HeaderContainer>
  )
}

export default Navbar
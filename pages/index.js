import React,{useState} from 'react'
import CartItems from '../src/components/CartItems'
import Courses from '../src/components/Courses'
import Navbar from '../src/components/Navbar'

function ShoppingCart() {

  const [cart,setCart] = useState([]);

  function handleAddCart(url,name,price){
    const itemObject = {url, name, price };
    setCart([...cart, itemObject]);
  };

  function handeRemoveCart(itemId){
    const filterCart = cart.filter(cartItem => cart.indexOf(cartItem) !== itemId)
    setCart(filterCart)
  }

  function clearCart(){
    setCart([]);
  }

  return (
    <>
      <Navbar 
        cart={cart} 
        clearCart={clearCart}
      />
      <Courses handleAddCart={handleAddCart}/>
      <CartItems 
        cart={cart}
        handeRemoveCart={handeRemoveCart}
      />
    </>
  )
}

export default ShoppingCart
import React, { useContext } from 'react'
import { StateContext } from '../../context/AppProvider'

function Cart({cartItem}) {

  const cartPackage = useContext(StateContext)

  let cartItemsAre = cartPackage.cartItems.map(item=>{
    return(
      <>
        <div className="cart_img">
          <img src={item.img} alt="" />
        </div>
        <div className="cart-content">
          <h2>{item.title}</h2>
        </div>
      </>
    )
  })


  let addToCartResult = cartItem.map((item, index)=>{
    return(
      <div key={index}>
        <div className="cart_img" key={index}>
          <img src={item.cartImg} alt="" />
        </div>
        <div className="cart_content">
          <h2>{item.cartItem}</h2>
        </div>
      </div>
    )
  })
    
  return (
    <div className="cart-item">
    {cartItemsAre}
    </div>
  )
}

export default Cart
import React, {useContext, useState} from "react";
import CardData from "./CardData";
import Popup from "./Popup";
import {AllMenuContext} from './AllMenuContext'
import Cart from "./Cart";

function SpecialMenu() {
  let [showPopup, setShowPopup] = useState(false)
  let [currentDish, setCurrentDish] = useState('')
  let [cartItem, setCartItem] = useState([{}])
  const allMenus = useContext(AllMenuContext)


  function popupHandler(itemName) {
    setShowPopup(true)
    setCurrentDish(itemName)
  }

  let spMenu = allMenus.map((item, index) => {
    if (index < 8) {
      return (
        <CardData item={item} index={index} popupHandler={popupHandler} key={index}/>
      );
    }
  });

  function closePopupHandler(){
    setShowPopup(false)
  }
  function aadToCartHandler(image, itemName){
    setCartItem([
      ...cartItem,
      {
      "cartImg":image,
      "cartItem": itemName
    }])
  }
  return (
    <section className="special-menus">
      <Cart cartItem={cartItem}/>
      {showPopup && <Popup closePopupHandler={closePopupHandler} currentDish={currentDish} aadToCartHandler={aadToCartHandler} />}
      <h2>SpecialMenu</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolor harum
        rem omnis deserunt dolores voluptas deleniti magni ab dignissimos?
      </p>
      <ul>{spMenu}</ul>
    </section>
  );
}

export default SpecialMenu;

import React, { useContext } from "react";
import { AllMenuContext } from "./AllMenuContext";
import { DispatchContext } from "../../context/AppProvider";

function Popup({ closePopupHandler, currentDish, aadToCartHandler }) {
  const allMenus = useContext(AllMenuContext);
  const dispatch = useContext(DispatchContext);
  // console.log('dispatch',dispatch)

  let popupData = allMenus
    .filter((item) => {
      return item.strMeal == currentDish;
    })
    .map((item) => {
      return (
        <>
          <div className="popup-img">
            <img src={item.strMealThumb} alt="" />
          </div>

          <h2>{item.strMeal}</h2>
          <p className="ingredients">
            <span>{item.strIngredient1}</span>
            <span>{item.strIngredient2}</span>
            <span>{item.strIngredient3}</span>
          </p>
          <p className="instruction">{item.strInstructions}</p>
          <button
            onClick={() => {
              dispatch({
                type: "add_to_cart",
                payload: {
                  title: item.strMeal,
                  img: item.strMealThumb,
                },
              });
            }}
          >
            button
          </button>
        </>
      );
    });

  return (
    <div className="popup">
      <div className="popup-content">
        {popupData}
        <h5 className="close-popup" onClick={closePopupHandler}>
          close
        </h5>
      </div>
    </div>
  );
}

export default Popup;

import React from 'react'


function CardData({item, index, popupHandler}) {
  return (
    <li key={index}>
      <a href="javascript:;" onClick={()=>{popupHandler(item.strMeal)}}>
            <img src={item.strMealThumb} alt="" />
            <h5>{item.strMeal}</h5>
            </a>
          </li>
  )
}

export default CardData
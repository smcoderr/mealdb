import React, { useContext, useState } from "react";
import Pagenation from "./Pagenation";
import CardData from "./CardData";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";

function FilteredDishes({ catlist, beefCategory, setBeefCategory }) {
  const [filteredDishesListAre, setFilteredDishesListAre] = useState([]);
  const [activeDish, setActiveDish] = useState("Beef");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [showPopup, setShowPopup] = useState(false);
  const [currentDish, setCurrentDish] = useState("");

  const allMenus = useContext(AllMenuContext);

  // Calculate pagination
  const indexOfLastDish = currentPage * itemsPerPage;
  const indexOfFirstDish = indexOfLastDish - itemsPerPage;
  const showFilteredDishes = filteredDishesListAre.slice(indexOfFirstDish, indexOfLastDish);

  // Handle popup display
  function popupHandler(itemName) {
    setShowPopup(true);
    setCurrentDish(itemName);
  }

  // Handle filtering of dishes based on category selection
  function filtringHandler(e) {
    setCurrentPage(1); // Reset to first page
    setActiveDish(e); // Update active dish category
    const filteredDishesList = allMenus
      .filter((item) => item.strCategory === e)
      .map((item, index) => <CardData item={item} index={index} popupHandler={popupHandler} />);
    setFilteredDishesListAre(filteredDishesList);
  }

  // Render category list
  const categoryList = catlist.map((item, index) => (
    <li
      key={index}
      className={item.strCategory === activeDish ? "active" : ""}
      onClick={() => filtringHandler(item.strCategory)}
    >
      {item.strCategory}
    </li>
  ));

  // Render dishes for the initial load (Beef category)
  const firstLoadAre = beefCategory
    .filter((item) => item.strCategory === "Beef")
    .map((item, index) => <CardData item={item} index={index} popupHandler={popupHandler} />);
  
  const showFirstLoadAre = firstLoadAre.slice(indexOfFirstDish, indexOfLastDish);

  // Handle closing the popup
  function closePopupHandler() {
    setShowPopup(false);
  }

  // Handle adding to cart (placeholder function)
  function addToCartHandler(e) {
    alert(`Added to cart: ${e}`);
  }

  return (
    <section className="filtered-dishes">
      {showPopup && (
        <Popup
          closePopupHandler={closePopupHandler}
          currentDish={currentDish}
          addToCartHandler={addToCartHandler}
        />
      )}
      <ul className="categoryList">{categoryList}</ul>
      <ul className="filtered-dishes-list">
        {showFirstLoadAre.length > 0 ? showFirstLoadAre : "No dishes available"}
        {showFilteredDishes.length > 0 ? showFilteredDishes : null}
      </ul>

      <Pagenation
        filteredDishesListAre={filteredDishesListAre}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage}
        firstLoadAre={firstLoadAre}
      />
    </section>
  );
}

export default FilteredDishes;

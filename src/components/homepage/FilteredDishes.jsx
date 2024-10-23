import React, { useContext, useState } from "react";
import Pagenation from "./Pagenation";
import CardData from "./CardData";
import Popup from "./Popup";
import { AllMenuContext } from "./AllMenuContext";

function FilteredDishes({ catlist, beefCategory, setBeefCategory }) {
  let [filteredDishesListAre, setFilteredDishesListAre] = useState([]);
  let [activeDish, setActiveDish] = useState("Beef");
  let [currentPage, setCurrentPage] = useState(1);
  let [itemsPerPage, setItemsPerPage] = useState(4);
  let [showPopup, setShowPopup] = useState(false);
  let [currentDish, setCurrentDish] = useState("");

  const allMenus = useContext(AllMenuContext);

  let indexOfLastDish = currentPage * itemsPerPage;

  let indexOfFirstDish = indexOfLastDish - itemsPerPage;

  let showFilteredDishes = filteredDishesListAre.slice(
    indexOfFirstDish,
    indexOfLastDish
  );

  function popupHandler(itemName) {
    setShowPopup(true);
    setCurrentDish(itemName);
  }

  function filtringHandler(e) {
    setCurrentPage(1);
    setBeefCategory([]);
    setActiveDish(e);
    const filteredDishesList = allMenus
      .filter((item) => {
        return item.strCategory === e;
      })
      .map((item, index) => {
        return (
          <CardData item={item} index={index} popupHandler={popupHandler} />
        );
      });
    setFilteredDishesListAre(filteredDishesList);
  }
  const categoryList = catlist.map((item, index) => {
    return (
      <li
        key={index}
        className={item.strCategory === activeDish ? "active" : ""}
        onClick={() => {
          filtringHandler(item.strCategory);
        }}
      >
        {item.strCategory}
      </li>
    );
  });

  const firstLoadAre = beefCategory
    .filter((item) => {
      return item.strCategory === "Beef";
    })
    .map((item, index) => {
      return <CardData item={item} index={index} popupHandler={popupHandler} />;
    });
  let showFirstLoadAre = firstLoadAre.slice(indexOfFirstDish, indexOfLastDish);

  function closePopupHandler() {
    setShowPopup(false);
  }

  function aadToCartHandler(e) {
    alert(e);
  }

  return (
    <section className="filtered-dishes">
      {showPopup && (
        <Popup
          closePopupHandler={closePopupHandler}
          currentDish={currentDish}
          aadToCartHandler={aadToCartHandler}
        />
      )}
      <ul className="categoryList">{categoryList}</ul>
      <ul className="filtered-dishes-list">
        {showFirstLoadAre}
        {firstLoadAre.length > 0 || showFilteredDishes.length > 0
          ? showFilteredDishes
          : "its empty"}
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

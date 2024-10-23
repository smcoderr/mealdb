import React from "react";

function Pagenation({
  filteredDishesListAre,
  itemsPerPage,
  setCurrentPage,
  firstLoadAre,
}) {
  function handleClick(e) {
    setCurrentPage(e);
  }

  const totalItems =
    filteredDishesListAre.length > 0
      ? filteredDishesListAre.length
      : firstLoadAre.length;
  let numberOfPages = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    numberOfPages.push(i);
  }
  let numberOfPagesAre = numberOfPages.map((item,index) => {
    return <li key={index} onClick={() => handleClick(item)}>{item}</li>;
  });
  return <ul className="pagenation">{numberOfPagesAre}</ul>;
}

export default Pagenation;

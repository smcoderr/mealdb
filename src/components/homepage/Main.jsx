import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SpecialMenu from "./SpecialMenu";
import FilteredDishes from "./FilteredDishes";
import { AllMenus } from "./AllMenuContext";
import { AppProvider } from "../../context/AppProvider";
import Checkout from "./Checkout";
import Header from "./Header";
import Footer from "./Footer";

const Main = () => {
  const [catlist, setCatlist] = useState([]);
  const [beefCategory, setBeefCategory] = useState([]);

  const categoryDB = async () => {
    try {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
      const response = await fetch(API_URL);
      const categorydata = await response.json();
      setCatlist(categorydata.categories);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const singleDishDB = async () => {
    try {
      const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
      const response = await fetch(API_URL);
      const SingleDishData = await response.json();
      setBeefCategory(SingleDishData.meals);
    } catch (error) {
      console.error("Failed to fetch dishes:", error);
    }
  };

  useEffect(() => {
    categoryDB();
    singleDishDB();
  }, []);

  return (
    <Router basename="/mealdb">
      <Header />
      <main>
        <AppProvider>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <AllMenus>
                  <SpecialMenu />
                  <FilteredDishes
                    catlist={catlist}
                    beefCategory={beefCategory}
                    setBeefCategory={setBeefCategory}
                  />
                </AllMenus>
              }
            />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </AppProvider>
      </main>
      <Footer />
    </Router>
  );
};

export default Main;

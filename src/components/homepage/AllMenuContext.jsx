import React, {useState, useEffect} from "react";

export const AllMenuContext = React.createContext()

export const AllMenus = (props) =>{
    const [allMenu, setAllmenu] = useState([]);
    const [loading, setLoading] = useState(false);

    const cMealDB = async () => {
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        const response = await fetch(API_URL);
        const data = await response.json();
        setAllmenu(data.meals);
        setLoading(true);
      };

      useEffect(() => {
        cMealDB();
      }, []);


    return(
      <AllMenuContext.Provider value={allMenu}>
        {loading ? props.children: "loading..."}
    </AllMenuContext.Provider>
    )
}
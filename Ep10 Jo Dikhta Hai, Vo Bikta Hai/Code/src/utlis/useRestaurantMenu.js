import { useState, useEffect } from "react";
import { RESTAURANT_MENU_API } from "../utlis/constants";

const useRestaurantMenu = (resId) => {
  //* Step1: Recognize the input: resId

  // We need to again fetch the API in case the restaurant ID changes. so we will keep the restaurant inforamtion in state variable.
  //* As the component is re-rendered whenever the state variable changes
  const [resMenu, setResMenu] = useState(null);

  //   We only need to fetch the API only once after the component is rendered. So the aray dependency is []
  useEffect(() => {
    fetchMenuAPI();
  }, []);

  const fetchMenuAPI = async () => {
    const data = await fetch(RESTAURANT_MENU_API + resId);
    const json = await data.json();
    console.log("Json: ", json);
    setResMenu(json);
  };
  //   Step 2: Recognize the output
  return resMenu;
};

export default useRestaurantMenu;

import { useState, useEffect } from "react";
import { FOOD_APP_API } from "./constants";

const useRestaurantList = () => {
  //* Step1: Input
  // Never ever modify the listOfRestaurant state variable as you will lose the original data fetched from the API
  const [restaurantList, setRestaurantList] = useState([]);

  //* Step 2: Built logic
  // Fetch API at intial render only

  // This useEffect is called only once after the body component is rendered initially
  useEffect(() => {
    console.log(" Fetching useEffect..(At the intial render)");
    fetchRestaurantList();
    console.log(" Line after Fetching function .....");
  }, []);

  const fetchRestaurantList = async () => {
    console.log(" Started fetching........");
    const data = await fetch(FOOD_APP_API);

    console.log("Fetching done.......");
    const jsonData = await data.json();

    const restaurants =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log("In Custom hook: ", restaurants);

    setRestaurantList(restaurants); // Whenever the state variable changes the component is re-rendered
  };

  return restaurantList;
};

export default useRestaurantList;

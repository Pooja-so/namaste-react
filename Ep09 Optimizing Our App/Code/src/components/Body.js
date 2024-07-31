import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { FOOD_APP_API } from "../utlis/constants";

const Body = () => {
  // Local State variable - super powerful variable

  const [lisOfRestaurant, setListOfRestaurant] = useState([]); // Do not modify the listOfRestaurant state variable as you will lose the original data fetched from the API
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); // Do modification in the filteredRestaurant state variable
  const [searchText, setSearchText] = useState("");

  /* useEffect(callback function, dependency array)
  - callback function is called after the body component is rendered
  */
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch the data
  const fetchData = async () => {
    const data = await fetch(FOOD_APP_API);
    const jsonData = await data.json();

    const restaurants =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log(restaurants);

    setListOfRestaurant(restaurants);
    setFilteredRestaurant(restaurants);
  };

  // Function to filter the top rated restaurant
  function filterRestaurant() {
    const filteredData = lisOfRestaurant.filter(
      (restaurant) => restaurant.info.avgRating > 3.9
    );
    setFilteredRestaurant(filteredData);
  }

  // Function to search the restaurant
  function searchRestaurant() {
    const searchResult = lisOfRestaurant.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("Searched Restaurant Result: ", searchResult);

    setFilteredRestaurant(searchResult);
  }

  console.log("Body component is rendered");

  // conditional rendering
  return lisOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="btn-container">
        <div className="filter">
          <button className="filter-btn" onClick={filterRestaurant}>
            Top Rated Restaurant
          </button>
        </div>

        <div className="search">
          <input
            className="search-input"
            type="text"
            value={searchText}
            placeholder="search by restaurant name"
            onChange={(event) => setSearchText(event.target.value)}
          ></input>
          <button className="search-btn" onClick={searchRestaurant}>
            search
          </button>
        </div>
      </div>

      <div className="card-container">
        {/* Passing props to component */}
        {/*Returning a restaurant card for each restaurant in list*/}
        {/* Warning: Each child in a list should have a unique "key" prop. */}
        {filteredRestaurant.length === 0 ? (
          <h1>No search result !!</h1>
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              to={"/restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

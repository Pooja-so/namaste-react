import { useEffect, useState } from "react";
import useRestaurantList from "../utlis/useRestaurantList";
import useOnlineStatus from "../utlis/useOnlineStatus";
import { Link } from "react-router-dom";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State variable - super powerful variable

  const restaurantList = useRestaurantList();
  console.log(" RestaurantList: ", restaurantList);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]); // Do modification in the filteredRestaurant state variable

  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  console.log("Online Status: ", onlineStatus);

  useEffect(() => {
    console.log(" In Filtered useEffect..: ");
    console.log("Before Filtered State: ", filteredRestaurant);
    setFilteredRestaurant(restaurantList); // As the state vraiable is updated body component is re-rendered
    console.log("After Filtered State: ", filteredRestaurant);
  }, [restaurantList]);

  // Function to filter the top rated restaurant
  function filterRestaurant() {
    const filteredData = restaurantList.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setFilteredRestaurant(filteredData);
  }

  // Function to search the restaurant
  function searchRestaurant() {
    const searchResult = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("Searched Restaurant Result: ", searchResult);

    setFilteredRestaurant(searchResult);
  }

  if (!onlineStatus) {
    return <h1>Oops!! No internet connection.....</h1>;
  }

  console.log("Body component is rendered");

  // conditional rendering
  return restaurantList.length === 0 ? (
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

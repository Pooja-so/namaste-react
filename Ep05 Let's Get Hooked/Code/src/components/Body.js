import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utlis/mockdata";

const Body = () => {
  // Local State variable - super powerful variable
  // const [LisOfRestaurant, setListOfRestaurant] = useState([
  //   {
  //     data: {
  //       id: "74453",
  //       name: "Domino's Pizza",
  //       cloudinaryImageId: "bz9zkh2aqywjhpankb07",
  //       cuisines: ["Pizzas"],
  //       costForTwo: 40000,
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 45,
  //       avgRating: "4.0",
  //     },
  //   },
  //   {
  //     data: {
  //       name: "Richie Rich Juices & Shakes",
  //       totalRatingsString: "500+ ratings",
  //       cloudinaryImageId: "nyp7yrzwc1dc2xqfkydk",
  //       cuisines: ["Ice Cream"],
  //       tags: [],
  //       costForTwo: 25000,
  //       costForTwoString: "₹250 FOR TWO",
  //       deliveryTime: 30,
  //       avgRating: "3.9",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "307070",
  //       name: "Pizza Pie",
  //       cloudinaryImageId: "bvr70adr30ejyr5ua79k",
  //       cuisines: ["Pizzas"],
  //       costForTwo: 30000,
  //       costForTwoString: "₹300 FOR TWO",
  //       deliveryTime: 37,
  //       avgRating: "4.2",
  //     },
  //   },
  //   {
  //     data: {
  //       id: "76858",
  //       name: "Feeling Hungry",
  //       cloudinaryImageId: "oxsb5mr1xsmhnxhunjsc",
  //       cuisines: ["Chinese", "North Indian", "Biryani"],
  //       costForTwo: 2000,
  //       costForTwoString: "₹20 FOR TWO",
  //       deliveryTime: 35,
  //       avgRating: "3.2",
  //     },
  //   },
  // ]);
  const [LisOfRestaurant, setListOfRestaurant] = useState(restaurantList);
  function filterRestaurant() {
    console.log("Button clicked!");
    const filteredData = LisOfRestaurant.filter(
      (restaurant) => restaurant.data.avgRating > 3.9
    );
    setListOfRestaurant(filteredData);
  }
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={filterRestaurant}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="card-container">
        {/* Passing props to component */}
        {/*Returning a restaurant card for each restaurant in list*/}
        {/* Warning: Each child in a list should have a unique "key" prop. */}
        {LisOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

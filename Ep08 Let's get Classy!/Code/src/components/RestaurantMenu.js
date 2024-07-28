import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RESTAURANT_Menu_API } from "../utlis/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // We need to again fetch the API in case the restaurant ID changes. so we will keep the restaurant inforamtion in state variable.
  //* As the component is re-rendered whenever the state variable changes
  const [resMenu, setResMenu] = useState(null);

  const { resId } = useParams();

  //   const params = useParams();
  // console.log("Paramater", params);

  //   We only need to fetch the API only once after the component is rendered. So the aray dependency is []
  useEffect(() => {
    fecthMenuAPI();
  }, []);

  const fecthMenuAPI = async () => {
    const data = await fetch(RESTAURANT_Menu_API + resId);

    const json = await data.json();
    console.log("JSON: ", json);

    setResMenu(json);
  };

  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resMenu?.data?.cards[2]?.card?.card?.info;

  const itemCards =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards;

  return (
    <div className="menu">
      <div>
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{costForTwoMessage}</h4>
      </div>
      <div className="menu-cards">
        {itemCards.map((item) => (
          <div key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;

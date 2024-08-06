import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utlis/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  // We need to again fetch the API in case the restaurant ID changes. so we will keep the restaurant inforamtion in state variable.
  //* As the component is re-rendered whenever the state variable changes
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  //   const params = useParams();
  // console.log("Paramater", params);

  if (resMenu === null) return <Shimmer />;

  const { id, name, cuisines, costForTwoMessage } =
    resMenu?.data?.cards[2]?.card?.card?.info;

  const cardGroup =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = cardGroup.filter((category) => {
    return (
      category?.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  console.log("Card category: ", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl m-1">{name}</h1>
      <h3 className="italic text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </h3>
      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          categoryData={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;

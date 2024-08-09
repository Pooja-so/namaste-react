import { IMG_CDN_URL } from "../utlis/constants";
// Restaurant Card component: Image, name, cuisine
const RestaurantCard = (props) => {
  //   console.log(props); //props is an javascript object
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    sla,
  } = resData?.info;
  return (
    <div className="flex flex-col justify-center items-center w-80  p-5 bg-slate-200 h-auto rounded-lg hover:bg-slate-300">
      <div className="h-3/6">
        <img
          className="w-30 rounded-lg"
          src={IMG_CDN_URL + cloudinaryImageId}
        ></img>
      </div>
      <div className="flex flex-col gap-1 p-3 h-3/6">
        <h3 className="font-bold text-xl justify-self-center">{name}</h3>
        <h4 className="text-lg">{cuisines.join(", ")}</h4>
        <h4 className="text-lg">{avgRating} Star rating</h4>
        <h4 className="text-lg">{costForTwoString}</h4>
        <h4 className="text-lg">
          {" "}
          <b>Delivery Time:</b> {sla?.deliveryTime} min
        </h4>
        <button className="bg-green-500 p-2 rounded-lg border-gray-400 border-2 shadow-lg w-40 mt-2 self-center">
          Add to cart
        </button>
      </div>
    </div>
  );
};

// A higher order component is a function that takes a component as an input, enhances it and return a new component as an output. Enhances in the sense adding some extra props, UI related styling etc.
// It does not modifies the input component, it adds extra features on the top of the component.
export const withPromotedLabel = (RestaurantCard) => {
  return () => {
    return (
      <>
        <label>Promoted</label>
        <RestaurantCard />
      </>
    );
  };
};

export const isOpened = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className=" absolute bg-green-700 text-white p-1 rounded-lg text-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};
export default RestaurantCard;

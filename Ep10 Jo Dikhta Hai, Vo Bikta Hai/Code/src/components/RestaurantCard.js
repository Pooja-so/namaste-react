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
      <img
        className="w-30 rounded-lg"
        src={IMG_CDN_URL + cloudinaryImageId}
      ></img>
      <div className="flex flex-col gap-1 p-3">
        <h3 className="font-bold text-xl justify-self-center">{name}</h3>
        <h4 className="text-lg">{cuisines.join(", ")}</h4>
        <h4 className="text-lg">{avgRating} Star rating</h4>
        <h4 className="text-lg">{costForTwoString}</h4>
        <h4 className="text-lg"> <b>Delivery Time:</b> {sla?.deliveryTime} min</h4>
        <button className="bg-green-500 p-2 rounded-lg border-gray-400 border-2 shadow-lg w-40 mt-2 self-center">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;

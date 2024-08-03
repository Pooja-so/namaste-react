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
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <div className="card-content">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <span>
          <h4>
            {avgRating} Star rating
          </h4>
          <h4>{costForTwoString}</h4>
          <h4>Delivery Time: {sla?.deliveryTime} min</h4>
        </span>
        <a href="#" className="btn">
          Add To Cart
        </a>
      </div>
    </div>
  );
};

export default RestaurantCard;

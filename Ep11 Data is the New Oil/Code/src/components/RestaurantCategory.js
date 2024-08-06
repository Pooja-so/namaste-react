import { useState } from "react";
import ItemCards from "./ItemCards";

const RestaurantCategory = ({ categoryData }) => {
  const [expandCategory, setExpandCategory] = useState(false);
  const [arrow, setArrow] = useState("down");

  function handleClick() {
    setExpandCategory(!expandCategory);
    setArrow(arrow === "down" ? "up" : "down");
  }

  // console.log("Category Data: ", categoryData);
  return (
    //w-6/12: width:50%
    <div>
      <div className="w-6/12 mx-auto my-3">
        {/* Header */}
        <div
          className="flex justify-between bg-slate-200 p-2 shadow-md font-semibold text-lg cursor-pointer"
          onClick={handleClick}
        >
          <h1>
            {categoryData?.title} ({categoryData?.itemCards?.length})
          </h1>
          <span>{arrow === "down" ? "⬇️" : "⬆️"}</span>
        </div>
        {/* ItemCards */}
        {expandCategory && <ItemCards items={categoryData?.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;

import { IMG_CDN_URL } from "../utlis/constants";
const ItemCards = ({ items }) => {
  console.log("Item Cards:", items);
  return (
    <div>
      {items.map((item) => {
        const { info } = item?.card;
        return (
          <div
            key={info?.id}
            className="flex text-left p-2 border-b-2 border-stone-300 shadow-md mb-3"
          >
            <div className="w-9/12 text-lg">
              <span className="font-bold">{info?.name}</span> -{"  "}
              <span className="">
                ₹{info?.price ? info?.price : info?.defaultPrice}
              </span>
              <p className="text-base text-justify mt-1 text-slate-800 pr-5">
                {info?.description}
              </p>
            </div>

            <div className="w-3/12 pt-1 pb-5 relative">
              <div>
                <img className="rounded-md" src={IMG_CDN_URL + info?.imageId} alt={"No Image"} />
              </div>
              <div className="absolute inset-0 flex justify-center items-end">
                <button className="bg-black text-white  rounded-lg p-2">
                  ADD+
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCards;

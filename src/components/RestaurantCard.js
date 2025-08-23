
import { IMG_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo ,sla} = resData?.info;
  return (
    <div className="res-card p-4 m-3 w-48 bg-gray-100 rounded-2xl">
      <img
        className="res-logo rounded-2xl"
        alt="res-logo"
        src= {IMG_URL}
      />
      <h4 className="font-bold py-4 text-lg"> {name}</h4>
      <h5 className=""> {cuisines.join(", ")}</h5>
      <h5> {avgRating} star</h5>
      <h5> {costForTwo} </h5>
       <h5> {sla?.slaString} </h5>
    </div>
  );
};
export default RestaurantCard;
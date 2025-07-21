
import { IMG_URL } from "../utils/constants";
import { resObj } from "../utils/mockData";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src= {IMG_URL}
      />
      <h4> {name}</h4>
      <h5> {cuisines.join(", ")}</h5>
      <h5> {avgRating} star</h5>
      <h5> {costForTwo} </h5>
    </div>
  );
};
export default RestaurantCard
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [oldRestaurantcard, setNewRestaurant] = useState(resObj);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log(oldRestaurantcard);
            const filterRes = oldRestaurantcard.filter(
              (res) => res.info.avgRating > 4.3
            );
            console.log(filterRes);
            setNewRestaurant(filterRes);
          }}
        >
          Top Rated Restauratent{" "}
        </button>
      </div>
      <div className="res-container">
        {oldRestaurantcard.map((i) => (
          <RestaurantCard key={i?.info?.id} resData={i} />
        ))}
      </div>
    </div>
  );
};
export default Body;

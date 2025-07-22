import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [oldRestaurantcard, setNewRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4798396&lng=77.3223915&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setNewRestaurant(restaurants);
  };
 

  return oldRestaurantcard.length === 0 ? (
    <Shimmer />
  ) : (
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

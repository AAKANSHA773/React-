import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [oldRestaurantcard, setNewRestaurant] = useState([]);
  const [filterRestaurents, setFilterRestaurent] = useState([]);
  const [searchres, setSearchres] = useState("");

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
    setFilterRestaurent(restaurants);
  };

  const onlinStatus = useOnlineStatus();
  if (onlinStatus === false)
    return (
      <h1>Looks Like You"re ofline !! Please check your internet connection</h1>
    );

  return oldRestaurantcard.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container flex mb-4 mt-4">
        <div className="search-Text">
          <input
            type="text"
            className="border-solid border-2 border-b-black m-2 p-1"
            value={searchres}
            onChange={(e) => {
              setSearchres(e.target.value);
            }}
          />
          <button
            className="px-3 p-1 text-s bg-emerald-100 rounded-2xl border-2"
            onClick={() => {
              const filteredres = oldRestaurantcard.filter((res) =>
                res.info.name.toLowerCase().includes(searchres.toLowerCase())
              );
              setFilterRestaurent(filteredres);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className=" border-2 rounded-2xl m-2 p-1 bg-gray-200"
            onClick={() => {
              console.log(oldRestaurantcard);
              const filterRes = oldRestaurantcard.filter(
                (res) => res?.info.avgRating >= 4.2
              );
              console.log(filterRes);
              setFilterRestaurent(filterRes);
            }}
          >
            Top Rated Restauratent{" "}
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {filterRestaurents.map((i) => (
          <Link key={i?.info?.id} to={"/restaurantMenu/" + i?.info?.id}>
            <RestaurantCard resData={i} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;

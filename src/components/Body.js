import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [oldRestaurantcard, setNewRestaurant] = useState([]);
  const [filterRestaurents,setFilterRestaurent] = useState([])
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
    setFilterRestaurent(restaurants)
  };

  return oldRestaurantcard.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
      <div className="search-Text">
        <input
          type="text"
          className="input-box"
          value={searchres}
          onChange={(e) => {
            setSearchres(e.target.value);
          }}
        />
        <button
          className="search-btn"
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
          className="filter-btn"
          onClick={() => {
            console.log(oldRestaurantcard);
            const filterRes = oldRestaurantcard.filter(
              (res) => res?.info.avgRating >=4.2
            );
            console.log(filterRes);
            setFilterRestaurent(filterRes);
          }}
        >
          Top Rated Restauratent{" "}
        </button>
      </div></div>
      <div className="res-container">
        {filterRestaurents.map((i) => (
          <RestaurantCard key={i?.info?.id} resData={i} />
        ))}
      </div>
    </div>
  );
};
export default Body;

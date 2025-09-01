import Shimmer from "./Shimmer";
import { useParams } from "react-router";

import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./restaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name,id, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  
    const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
   
  return (
    <div className="text-center  ">
      <h1  className="my-6 text-2xl font-bold">{name}</h1>
      <p className="text-xl font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {categories.map((category)=><RestaurantCategory key ={category?.card?.card?.categoryId} data={category?.card?.card}/>)}
    </div>
  );
};
export default RestaurantMenu;

import { useState } from "react";
import ItemCategoryList from "./ItemCategoryList";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  // console.log (data.type.itemCards.lenght)
const [showItem,setShowITem] =useState(false)
  const handleClick = ()=>{
setShowITem(!showItem);

  }
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-4 p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-s  ">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>▼</span>
        </div>
      
      <div>
       {showItem &&<ItemCategoryList items={data.itemCards} />}
      </div></div>
    </div>
  );
};
export default RestaurantCategory;

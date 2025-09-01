const ItemCategoryList = ({items}) => {
    console.log("itemss",items)
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className=" pb-2 border-gray-200 border-b-2 text-left">

            <div className="py-2">
            <span className="font-bold">{item.card.info.name}</span>
            <span className=""> - ₹{item.card.info.price /100} </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
        </div>
      ))}
      
    </div>
  );
};
export default ItemCategoryList;

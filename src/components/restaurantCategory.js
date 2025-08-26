const RestaurantCategory = ({data}) => {
  console.log(data);
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg mx-auto my-4 p-4 flex justify-between">
        <span className="font-bold text-s">
          {data?.title}{data?.itemCards.lenght}
        </span>
        <span>▼</span>
      </div>
    </div>
  );
};
export default RestaurantCategory;

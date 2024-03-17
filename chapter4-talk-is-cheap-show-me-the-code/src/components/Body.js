import ResCards, { withPromotedLabel } from "./ResCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";
import useRestaurent from "../utils/useRestaurent";

//creating main body

const Body = () => {
  const listOfRestaurents = useRestaurent();

  const [filterdRestaurent, setFilterdRestaurent] = useState([]);

  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(ResCards);

  useEffect(() => {
    setFilterdRestaurent(listOfRestaurents);
  }, [listOfRestaurents]);

  //Top rated restaurent
  const handleFilter = function () {
    const filteredList = listOfRestaurents.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilterdRestaurent(filteredList);
  };

  // for checking the online status
  const onlineStatus = useStatusOnline();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!! please check your internet connection
      </h1>
    );

  return filterdRestaurent.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter flex">
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-orange-600 rounded-lg text-white font-bold hover:underline"
            onClick={handleFilter}
          >
            Top Rated Restaurents
          </button>
        </div>

        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black w-96 p-1 ml-72"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 ml-4 bg-orange-600 rounded-lg text-white font-bold hover:underline"
            onClick={() => {
              const filteredRestaurent = listOfRestaurents.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText);
              });
              setFilterdRestaurent(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filterdRestaurent.map((restaurant) => (
          <Link
            to={"/restaurents/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {
              restaurant.info.veg ? <RestaurantCardPromoted resData={restaurant}/> :  <ResCards resData={restaurant} />
            }

           
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

import ResCards from "./ResCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { RESTAURENT_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useStatusOnline from "../utils/useStatusOnline";

//creating main body

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);

  const [filterdRestaurent, setFilterdRestaurent] = useState([]);

  const [searchText, setSearchText] = useState("");

  //rating
  const handleFilter = function () {
    const filteredList = listOfRestaurents.filter(
      (res) => res.info.avgRating > 4.5
    );
    setFilterdRestaurent(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURENT_API);
    const json = await data.json();
    // optional chaining
    setListOfRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurents
        </button>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
      <div className="res-cards-container">
        {filterdRestaurent.map((restaurant) => (
          <Link
            to={"/restaurents/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <ResCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

import ResCards from "./ResCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

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
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // optional chaining
    setListOfRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterdRestaurent(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

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
          <ResCards key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

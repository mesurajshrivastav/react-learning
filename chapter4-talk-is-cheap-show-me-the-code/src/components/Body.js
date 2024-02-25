import ResCards from "./ResCards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//creating main body

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const handleFilter = function () {
    const filteredList = listOfRestaurents.filter(
      (res) => res.info.avgRating > 4.5
    );
    setListOfRestaurents(() => filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // optional chaining
    setListOfRestaurents(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  return listOfRestaurents.length === 0 ?( <Shimmer/>) : (
    <div className="body-container">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-cards-container">
        {listOfRestaurents.map((restaurant) => (
          <ResCards key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

import ResCards from "./ResCards";
import resList from "../utils/mockData";
import { useState } from "react";

//creating main body

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState(resList);
  const handleFilter = function(){
    const filteredList = listOfRestaurents.filter(
      (res)=> res.info.avgRating > 4
    );
    setListOfRestaurents(() => filteredList);
  }

  return (
    <div className="body-container">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={handleFilter}
        >
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

import ResCards from "./ResCards";
import resList from "../utils/mockData";

//creating main body


  
  const Body = () => {
    return (
      <div className="body-container">
        <div className="search">
          <input type="text" name="search" />
          <button>Search</button>
        </div>
        <div className="res-cards-container">
          {resList.map((restaurant) => (
            <ResCards resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  
  export default Body;
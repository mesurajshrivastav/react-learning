import { CDN_URL } from "../utils/constants";

//restaurent Cards
const ResCards = (props) => {
    const { resData } = props;
    const { name, avgRating, cuisines, areaName, costForTwo, cloudinaryImageId } =
      resData?.info;
    const resImg =
      CDN_URL +
      cloudinaryImageId;
    return (
      <div className="card-container">
        <img src={resImg} />
        <div className="res-text">
          <h3>{name}</h3>
          <h4> *{avgRating} stars</h4>
          <h5>{costForTwo}</h5>
          <h5>{cuisines}</h5>
          <h5>{areaName}</h5>
        </div>
      </div>
    );
  };

  export default ResCards;
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurentMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>{avgRating} stars</h2>

      <div className="menu">
        <h2>Menu</h2>
        <ul>
          {itemCards &&
            itemCards.length > 0 &&
            itemCards.map((item) => {
              return (
                <li key={item.card.info.id}>
                  {item.card.info.name} - &#8377; {item.card.info.price / 100}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurentMenu;

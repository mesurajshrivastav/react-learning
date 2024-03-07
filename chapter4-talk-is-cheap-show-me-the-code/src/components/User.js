import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  const { name, location, learning } = props;
  return (
    <div className="user-card">
      <h2>count : {count}</h2>
      <h2>count : {count2}</h2>
      <h3>Name : {name}</h3>
      <h3>Location : {location}</h3>
      <h3>Learning : {learning}</h3>
    </div>
  );
};

export default User;

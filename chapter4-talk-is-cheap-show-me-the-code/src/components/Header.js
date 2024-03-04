import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

  const [btnName,setBtnName] = useState("Login");

    return (
      <div className="header">
        <img
          src = {LOGO_URL}
          alt="BigCo Inc. logo"
        />
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
            <button className="login-btn" onClick = {()=> {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");

            }}>{btnName}</button>
        </ul>
      </div>
    );
  };

  export default Header;
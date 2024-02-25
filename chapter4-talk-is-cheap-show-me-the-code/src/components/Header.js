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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="about">About Us</a>
          </li>
          <li>
            <a href="contact">Contact Us</a>
          </li>
          <li>
            <a href="cart">Cart</a>
          </li>
            <button className="login-btn" onClick = {()=> {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");

            }}>{btnName}</button>
        </ul>
      </div>
    );
  };

  export default Header;
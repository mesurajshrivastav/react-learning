import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    );
  };

  export default Header;
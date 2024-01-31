import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  -logo
 *  -menu bar
 * body
 *  -search
 *  -restaurent cards
 * footer
 *  -links
 *  -address
 *
 *
 * res-card
 *  -img
 *  - Res name name
 *  -rating
 *  -deleviry time
 *  -cusines
 *  -location
 *
 *
 */

// creating Navbar
const Header = () => {
  return (
    <div className="header">
      <img
        src="https://logo.com/image-cdn/images/kts928pd/production/7ab5def0ab1dad26a90bc35cb7eed9e628f7f201-430x430.png?w=1080&q=72"
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

//restaurent Cards
const ResCards = () => {
  return (
    <div className="card-container">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ppxmlepv15e3qexhhq9v" />
      <div className="res-text">
        <h2>Burger King</h2>
        <h3>* 4.4</h3>
        <h4>Burgers, American</h4>
        <h4>rohini</h4>
      </div>
    </div>
  );
};

//creating main body
const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <input type="text" name="search" />
        <button>Search</button>
      </div>
      <div className="res-cards-container">
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
        <ResCards />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

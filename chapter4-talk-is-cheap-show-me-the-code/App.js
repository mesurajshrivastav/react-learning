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
 */
const Header = () => {
  return (
    <div className="header">
      <img src="https://logo.com/image-cdn/images/kts928pd/production/7ab5def0ab1dad26a90bc35cb7eed9e628f7f201-430x430.png?w=1080&q=72" alt="BigCo Inc. logo" />
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="about">About Us</a></li>
        <li><a href="contact">Contact Us</a></li>
        <li><a href="cart">Cart</a></li>
    
      </ul>
    </div>
  );
};

const App = () => {
  return <Header />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

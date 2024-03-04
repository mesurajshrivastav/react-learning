import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, Router, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children: [
      {
        path : "/",
        element: <Body/>
      },
      {
        path: "/about",
        element : <About/>
      },
      {
        path: "/contact",
        element : <Contact/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

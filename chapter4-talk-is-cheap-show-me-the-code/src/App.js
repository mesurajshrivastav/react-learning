import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";
import { useState } from "react";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Aman Shrivastava",
    };
    setUserName(data.name);
  }, []);

  return (
    <div>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense
            fallback={
              <div>
                <h1>Loading......</h1>
              </div>
            }
          >
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurents/:resId",
        element: <RestaurentMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

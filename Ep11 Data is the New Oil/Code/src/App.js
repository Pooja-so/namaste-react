import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

/* import Header from "./components/Header" is same as import Header from "./components/Header.js". So don't write .js extension and try to keep it as simple as possible. */
// import {Header} from "./components/Header";
import Header from "./components/Header";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utlis/UserContext.js";

//* Dynamically Importing Grocery component to make a separate bundle for it.
const Grocery = lazy(() => import("./components/Grocery.js"));

//Task 1: Building Top-level Component for instance App Component that will contain all components
const AppLayout = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername("Pooja Singh");
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

// createBrowserRouter used for creating router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        // element: <Grocery />,
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

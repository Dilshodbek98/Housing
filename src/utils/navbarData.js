import React from "react";
import HouseItem from "../components/HouseItem";
import SignUpComponent from "../components/SignUp";
import { useUniqueId } from "../hooks/useId";
import FavouritesPage from "../pages/Favourites";
import SignIn from "../pages/SignIn";
const Home = React.lazy(() => import("../pages/Home"));
const Properties = React.lazy(() => import("../pages/Properties"));

export const navbarData = [
  {
    id: useUniqueId,
    title: "Home",
    path: "/home",
    element: (
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Home />
      </React.Suspense>
    ),
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Properties",
    path: "/properties",
    element: (
      <React.Suspense fallback={<h2>Loading...</h2>}>
        <Properties />
      </React.Suspense>
    ),
    private: true,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Sign In",
    path: "/signin",
    element: <SignIn />,
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Sign In",
    path: "/signup",
    element: <SignUpComponent />,
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Sign Up",
    path: "/signup",
    element: <h1>Sign up page</h1>,
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Favourites",
    path: "/favourites",
    element: <FavouritesPage />,
    private: true,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "House Item",
    path: "/houseitem/:id",
    element: <HouseItem />,
    private: false,
    hidden: true,
  },
];

import { useUniqueId } from "../hooks/useId";
import Home from "../pages/Home";
import Properties from "../pages/Properties";

export const navbarData = [
  {
    id: useUniqueId,
    title: "Home",
    path: '/home',
    element: <Home />,
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Properties",
    path: '/properties',
    element: <Properties />,
    private: false,
    hidden: false,
  },
  {
    id: useUniqueId,
    title: "Sign In",
    path: '/signin',
    element: <h1>Sign in page</h1>,
    private: false,
    hidden: true,
  },
  {
    id: useUniqueId,
    title: "Sign Up",
    path: '/signup',
    element: <h1>Sign up page</h1>,
    private: false,
    hidden: true,
  },
];
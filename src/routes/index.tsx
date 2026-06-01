import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/Landing";
import Container from "../layout/Container";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
    ],
  },
]);

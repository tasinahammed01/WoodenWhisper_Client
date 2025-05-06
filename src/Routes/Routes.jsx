import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import Journal from "../Pages/Journal/Journal";
import Projects from "../Pages/Projects/Projects";
import Shop from "../Pages/Shop/Shop";
import Videos from "../Pages/Videos/Videos";
import SingleJournals from "../Pages/SingleJournals/SingleJournals";
import SingleProjectPage from "../Pages/SingleProjectPage/SingleProjectPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // equivalent to path: "/"
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "journal",
        element: <Journal />,
      },
      {
        path: "journal/:id", 
        element: <SingleJournals />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <SingleProjectPage></SingleProjectPage>,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
    ],
  },
]);

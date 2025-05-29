import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../Pages/HomePage/HomePage";
import AboutPage from "../Pages/AboutPage/Philosophy";
import Journal from "../Pages/Journal/Journal";
import Projects from "../Pages/Projects/Projects";
import Videos from "../Pages/Videos/Videos";
import SingleJournals from "../Pages/SingleJournals/SingleJournals";
import SingleProjectPage from "../Pages/SingleProjectPage/SingleProjectPage";
import Lighting from "../Pages/Lighting/Lighting";
import Rugs from "../Pages/Rugs/Rugs";
import Philosophy from "../Pages/AboutPage/Philosophy";

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
        path: "about/philosophy",
        element: <Philosophy></Philosophy>,
      },
      {
        path: "about/people",
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
        path: "shop/lighting",
        element: <Lighting></Lighting>,
      },
      {
        path: "shop/rugs",
        element: <Rugs></Rugs>,
      },
      {
        path: "videos",
        element: <Videos />,
      },
    ],
  },
]);

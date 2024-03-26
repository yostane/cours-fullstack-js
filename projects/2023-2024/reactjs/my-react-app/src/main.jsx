import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import FightersPage from "./pages/FightersPage.jsx";
import FighterDetailPage from "./pages/FighterDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/fighters",
        element: <FightersPage />,
      },
      {
        path: "/fighters/:name",
        element: <FighterDetailPage />,
      },
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

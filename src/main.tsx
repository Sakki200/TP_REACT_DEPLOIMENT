import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./assets/components/Home.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortfolioDetails from "./assets/components/portfolio-details.tsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/details", element: <PortfolioDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

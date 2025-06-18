import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./components/Home";
import Error from "./components/Error"
import CountryDetails from "./components/CountryDetails";

const root = createRoot(document.querySelector("#root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Your layout (optional)
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>, // Your layout (optional)
      },
      {
        path: "/country",
        element: <CountryDetails />, // Your layout (optional)
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);

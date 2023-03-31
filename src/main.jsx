import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import User from "./pages/User";
import Adm from "./pages/Adm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      
    ]
  },
  {
    path:"user",
    element:<User/>,
  },
  {
    path:"adm",
    element:<Adm/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

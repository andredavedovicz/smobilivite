import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import User from "./pages/User";
import Adm from "./pages/Adm";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/user" element={<User />} />
        <Route path="/adm" element={<Adm />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

import React from "react";
// import { useContext, useReducer } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
// import { PropertiesContext } from "../context/properties";
import { navbarData } from "../utils/navbarData";

const Root = () => {
  // const [state, dispatch] = useContext(PropertiesContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Navigate to={"/home"} />} />
          {navbarData.map((item) => {
            return (
              <Route path={item.path} element={item.element} key={item.id} />
            );
          })}
          <Route path="*" element={<h1>404 error</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;

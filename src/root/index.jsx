import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import { navbarData } from "../utils/navbarData";

const Root = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default Root;

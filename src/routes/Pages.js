import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "../pages/Store";

function Pages(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Pages;

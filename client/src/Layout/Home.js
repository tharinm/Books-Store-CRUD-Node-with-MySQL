import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Books from "./Pages/Books";
import Add from "./Pages/Add";
import Update from "./Pages/Update";
import Navbar from "../Component/Navbar";

export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path={`/update/:id`} element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

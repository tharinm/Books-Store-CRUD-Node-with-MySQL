import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Books from "./Pages/Books";
import Add from "./Pages/Add";
import Update from "./Pages/Update";

export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

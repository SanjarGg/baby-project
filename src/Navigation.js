import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Card1 from "./pages/Card1";
import Card2 from "./pages/Card2";
import Card3 from "./pages/Card3";
import Card4 from "./pages/Card4";
import MainPage from "./pages/MainPage";

function Navigation() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/nipples" element={<Card1 />} />
          <Route path="/spoons" element={<Card2 />} />
          <Route path="/botels" element={<Card3 />} />
          <Route path="/cheshizubi" element={<Card4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;

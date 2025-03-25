import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Single from "./pages/Single";
import About from "./pages/About";
import AllVideo from "./pages/AllVideo";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import SingleShop from "./pages/SingleShop";
import Submit from "./pages/Submit";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single-page" element={<Single />} />
          <Route path="/about" element={<About />} />
          <Route path="/all-videos" element={<AllVideo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/single-shop" element={<SingleShop />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

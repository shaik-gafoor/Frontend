import React from "react";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Header from "./components/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/order" element={<placeOrder />}></Route>
      </Routes>
    </div>
  );
};

export default App;

import { assets } from "../../assets/assets";
import "./Navbar.css";
import { useState, useRef } from "react";
import { Menu } from "lucide-react";
import React from "react";

function Navbar() {
  const [line, setLine] = useState("");
  const menuRef = useRef(null); // Ref to toggle menu

  const toggleMenu = () => {
    const menu = menuRef.current;
    if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
      menu.style.maxHeight = "300px";
    } else {
      menu.style.maxHeight = "0px";
    }
  };

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />

      <ul className="navbar-menu" ref={menuRef}>
        <li
          onClick={() => setLine("home")}
          // className={line === "home" ? "active" : ""}
          className={`menu-item ${line === "home" ? "active" : ""}`}
        >
          Home
        </li>
        <li
          onClick={() => setLine("menu")}
          className={line === "menu" ? "active" : ""}
        >
          Menu
        </li>
        <li
          onClick={() => setLine("mobile-app")}
          className={line === "mobile-app" ? "active" : ""}
        >
          Mobile-App
        </li>
        <li
          onClick={() => setLine("contact-us")}
          className={line === "contact-us" ? "active" : ""}
        >
          Contact-us
        </li>
        <li>
          <button>sign in</button>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
        </div>
        <Menu className="menu-icon" onClick={toggleMenu} />
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default Navbar;

// import { assets } from "../../assets/assets";
// import "./Navbar.css";
// import { useState, useRef } from "react";
// import { Menu } from "lucide-react";
// import React from "react";

// function Navbar() {
//   const [line, setLine] = useState("");
//   const menuRef = useRef(null); // Ref to toggle menu

//   const toggleMenu = () => {
//     const menu = menuRef.current;
//     if (menu.style.maxHeight === "0px" || menu.style.maxHeight === "") {
//       menu.style.maxHeight = "300px";
//     } else {
//       menu.style.maxHeight = "0px";
//     }
//   };

//   return (
//     <div className="navbar">
//       <img src={assets.logo} alt="logo" className="logo" />

//       <ul className="navbar-menu" ref={menuRef}>
//         <li
//           onClick={() => setLine("home")}
//           // className={line === "home" ? "active" : ""}
//           className={`menu-item ${line === "home" ? "active" : ""}`}
//         >
//           Home
//         </li>
//         <li
//           onClick={() => setLine("menu")}
//           className={line === "menu" ? "active" : ""}
//         >
//           Menu
//         </li>
//         <li
//           onClick={() => setLine("mobile-app")}
//           className={line === "mobile-app" ? "active" : ""}
//         >
//           Mobile-App
//         </li>
//         <li
//           onClick={() => setLine("contact-us")}
//           className={line === "contact-us" ? "active" : ""}
//         >
//           Contact-us
//         </li>
//         <li>
//           <button>sign in</button>
//         </li>
//       </ul>

//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="search" />
//         <div className="navbar-search-icon">
//           <img src={assets.basket_icon} alt="basket" />
//         </div>
//         <Menu className="menu-icon" onClick={toggleMenu} />
//         <div className="dot"></div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import { assets } from "../../assets/assets";
import "./Navbar.css";
import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import React from "react";

function Navbar() {
  const [line, setLine] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    const menu = menuRef.current;
    if (!menu) return;

    if (isMenuOpen) {
      // Close menu
      menu.style.maxHeight = "0px";
      setIsMenuOpen(false);
    } else {
      // Open menu
      menu.style.maxHeight = "300px";
      setIsMenuOpen(true);
    }
  };

  const handleMenuItemClick = (itemName) => {
    setLine(itemName);
    // Close menu on mobile when item is clicked
    if (window.innerWidth <= 768) {
      const menu = menuRef.current;
      if (menu) {
        menu.style.maxHeight = "0px";
        setIsMenuOpen(false);
      }
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".menu-icon")
      ) {
        if (isMenuOpen) {
          menuRef.current.style.maxHeight = "0px";
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        const menu = menuRef.current;
        if (menu) {
          menu.style.maxHeight = "";
          setIsMenuOpen(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <div className="navbar">
      <img src={assets.logo} alt="logo" className="logo" />

      <ul className="navbar-menu" ref={menuRef}>
        <li
          onClick={() => handleMenuItemClick("home")}
          className={`menu-item ${line === "home" ? "active" : ""}`}
        >
          Home
        </li>
        <li
          onClick={() => handleMenuItemClick("menu")}
          className={`menu-item ${line === "menu" ? "active" : ""}`}
        >
          Menu
        </li>
        <li
          onClick={() => handleMenuItemClick("mobile-app")}
          className={`menu-item ${line === "mobile-app" ? "active" : ""}`}
        >
          Mobile-App
        </li>
        <li
          onClick={() => handleMenuItemClick("contact-us")}
          className={`menu-item ${line === "contact-us" ? "active" : ""}`}
        >
          Contact-us
        </li>
        <li>
          <button>Sign In</button>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="search" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="basket" />
          <div className="dot"></div>
        </div>
        {isMenuOpen ? (
          <X className="menu-icon" onClick={toggleMenu} />
        ) : (
          <Menu className="menu-icon" onClick={toggleMenu} />
        )}
      </div>
    </div>
  );
}

export default Navbar;

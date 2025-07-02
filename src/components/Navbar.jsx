import React, {useState, useRef, useEffect} from "react";
import "./Navbar.css";
import {Menu, ShoppingCart, CircleUser} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const [isShopOpen, setisShopOpen] = useState(false);
  const [isAccountOpen, setisAccountOpen] = useState(false);
  const shopRef = useRef(null);
  const accountRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (shopRef.current && !shopRef.current.contains(e.target)) {
        setisShopOpen(false);
      }
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setisAccountOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document, removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <nav className="navbar">
      <div className="logo">OneShopStop</div>
      <div
        className="hamburger"
        onClick={() => setisMobileMenuOpen((prev) => !prev)}
      >
        <Menu size={20} />
      </div>

      <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
        <li>
          <a onClick={() => setisMobileMenuOpen(false)} href="#">
            HOME
          </a>
        </li>
        <li
          ref={shopRef}
          className="shop"
          onClick={() => setisShopOpen((prev) => !prev)}
        >
          <a href="#">SHOP</a>
          {isShopOpen && (
            <ul className="dropdown">
              <li>
                <a href="#">DISPOSABLE VAPE</a>
              </li>
              <li>
                <a href="#">HOOKHAH ESSENTIALS</a>
              </li>
              <li>
                <a href="#">SMOKING ESSENTIALS</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a onClick={() => setisMobileMenuOpen(false)} href="#">
            ABOUT
          </a>
        </li>
      </ul>
      <ul className="nav-links">
        <li>
          {" "}
          <a onClick={() => setisMobileMenuOpen(false)} href="#">
            <ShoppingCart />
          </a>
        </li>
        <li ref={accountRef} className="account">
          <div onClick={() => setisAccountOpen(!isAccountOpen)}>
            {isLoggedIn ? (
              <img src="" alt="" className="profile-pic" />
            ) : (
              <button className="account-btn">
                <CircleUser />
              </button>
            )}
          </div>
          {isAccountOpen && !isLoggedIn && (
            <div className="popup">
              <h4>Wellcome!</h4>
              <button onClick={() => setIsLoggedIn(true)}>Login</button>
              <button onClick={() => setIsLoggedIn(true)}>Sign Up</button>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}

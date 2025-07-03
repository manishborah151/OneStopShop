import React, {useContext, useState} from "react";
import "./Navbar.css";
import {ShoppingBasket, Moon, Sun, Slack} from "lucide-react";
import uselocalstorage from "use-local-storage";
import {Link} from "react-router-dom";
import {ShopContext} from "../../Context/ShopContext";

const Navbar = () => {
  const [theme, setTheme] = uselocalstorage("theme", "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className={`navbar`} id="nav">
      <div className="nav-logo">
        <Link className="nav-logo-link" to="/u">
          <Slack />
          <p className="pnav">OneStopShop</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li
          className={menu === "shop" ? "active" : ""}
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          className={menu === "men" ? "active" : ""}
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/men">Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li
          className={menu === "women" ? "active" : ""}
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/women">Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li
          className={menu === "kids" ? "active" : ""}
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="log_btn">Login</button>
        </Link>
        <Link to="/cart">
          <ShoppingBasket className="cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <div className="theme-btn">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

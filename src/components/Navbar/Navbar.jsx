import React, {useContext, useState} from "react";
import "./Navbar.css";
import {ShoppingCart, Moon, Sun, Slack, CircleUser} from "lucide-react";
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
        <Link className="nav-logo-link" to="/OneStopShop">
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
          <Link to="/OneStopShop">HOME</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          className={menu === "vape" ? "active" : ""}
          onClick={() => {
            setMenu("vape");
          }}
        >
          <Link to="/OneStopShop/vape">VAPES</Link>
          {menu === "vape" ? <hr /> : <></>}
        </li>
        <li
          className={menu === "hookha" ? "active" : ""}
          onClick={() => {
            setMenu("hookha");
          }}
        >
          <Link to="/OneStopShop/hookha">HOOKHAH ESSENTIALS</Link>
          {menu === "hookha" ? <hr /> : <></>}
        </li>
        <li
          className={menu === "smoking" ? "active" : ""}
          onClick={() => {
            setMenu("smoking");
          }}
        >
          <Link to="/OneStopShop/smoking">SMOKING ESSENTIALS</Link>
          {menu === "smoking" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="log_btn">
            <CircleUser size={18} />
          </button>
        </Link>
        <Link to="/cart">
          <ShoppingCart size={18} className="cart" />
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

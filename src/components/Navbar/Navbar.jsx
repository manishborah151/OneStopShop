import React, {useContext, useState, useEffect} from "react";
import "./Navbar.css";
import {ShoppingCart, Moon, Sun, Slack, CircleUser} from "lucide-react";
import uselocalstorage from "use-local-storage";
import {Link} from "react-router-dom";
import {ShopContext} from "../../Context/ShopContext";

const Navbar = () => {
  const [theme, setTheme] = uselocalstorage("theme", "light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);

  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!isHovered) {
        setVisible(prevScrollY > currentScrollY || currentScrollY < 10);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`navbar ${visible ? "navbar-visible" : "navbar-hidden"}`}
      id="nav"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="nav-logo">
        <Link className="nav-logo-link" to="/OneStopShop">
          <Slack />
          <p className="pnav">OneStopShop</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li
          className={menu === "shop" ? "active" : ""}
          onClick={() => setMenu("shop")}
        >
          <Link to="/OneStopShop">HOME</Link>
        </li>
        <li
          className={menu === "vape" ? "active" : ""}
          onClick={() => setMenu("vape")}
        >
          <Link to="/OneStopShop/vape">VAPES</Link>
        </li>
        <li
          className={menu === "hookha" ? "active" : ""}
          onClick={() => setMenu("hookha")}
        >
          <Link to="/OneStopShop/hookha">HOOKHAH ESSENTIALS</Link>
        </li>
        <li
          className={menu === "smoking" ? "active" : ""}
          onClick={() => setMenu("smoking")}
        >
          <Link to="/OneStopShop/smoking">SMOKING ESSENTIALS</Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="log_btn">
            <CircleUser size={20} color="var(--text)" />
          </button>
        </Link>
        <Link to="/cart">
          <ShoppingCart size={20} className="cart" color="var(--text)" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <div className="theme-btn">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? (
              <Moon size={20} color="var(--text)" />
            ) : (
              <Sun size={20} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

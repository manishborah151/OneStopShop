import React, {useContext} from "react";
import "./Footer.css";
import {Slack, Instagram} from "lucide-react";

import {Link, useLocation} from "react-router-dom";
import {ShopContext} from "../../Context/ShopContext";

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"});
};

const Footer = () => {
  const {theme} = useContext(ShopContext);
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <Link className="nav-logo-link" to="/" onClick={handleLogoClick}>
          <Slack />
          <p className={`footer`}>ShopNex</p>
        </Link>
      </div>
      <ul className={"footer-links_" + theme}>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>
          {" "}
          <Link className={`link_${theme}`} to="/about " onClick={scrollToTop}>
            About
          </Link>
        </li>
        <li>
          {" "}
          <Link className={`link_${theme}`} to="/contact" onClick={scrollToTop}>
            Contact Us
          </Link>
        </li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <Instagram />
        </div>
      </div>
      <div className={`footer-copyright_${theme}`}>
        <hr className={`hr_${theme}`} />
        <p>Copyright @ {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

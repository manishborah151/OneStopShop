import React from "react";
import "./Footer.css";
import {Slack, Github, Linkedin, FileUser} from "lucide-react";

import {Link} from "react-router-dom";
import {ShopContext} from "../../Context/ShopContext";

const scrollToTop = () => {
  window.scrollTo({top: 0, behavior: "smooth"});
};

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="nav-logo">
          <Link className="nav-logo-link" to="/OneStopShop">
            <Slack />
            <p className="pnav">OneStopShop</p>
          </Link>
        </div>
      </div>
      <div className="footer-center">
        {" "}
        <div className="footProds">
          <h4>Products</h4>
          <ul className="footer-links">
            <li>
              {" "}
              <Link className="link" to="/about " onClick={scrollToTop}>
                Vapes
                <hr className="unerline" />
              </Link>
            </li>

            <li>
              {" "}
              <Link className="link" to="/about " onClick={scrollToTop}>
                Hookha Essentials
                <hr className="unerline" />
              </Link>
            </li>
            <li>
              {" "}
              <Link className="link" to="/contact" onClick={scrollToTop}>
                Smoking Essentials
                <hr className="unerline" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="footAbout">
          <Link className="link" to="/about " onClick={scrollToTop}>
            About
            <hr className="unerline" />
          </Link>
        </div>
        <div className="footContact">
          <Link className="link" to="/contact" onClick={scrollToTop}>
            Contact Me
            <hr className="unerline" />
          </Link>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-social-icon">
          {/* <Link className="link" to="/about " onClick={scrollToTop}>
            <Github />
          </Link>
          <Link className="link" to="/about " onClick={scrollToTop}>
            <Linkedin />
          </Link>
          <Link className="link" to="/about " onClick={scrollToTop}>
            <FileUser />
          </Link> */}
          <ul class="wrapper">
            <li class="icon facebook">
              <span class="tooltip">Github</span>
              <Github />
            </li>
            <li class="icon twitter">
              <span class="tooltip">Linkedin</span>
              <Linkedin />
            </li>
            <li class="icon instagram">
              <span class="tooltip">Resume</span>
              <FileUser />
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright @ {new Date().getFullYear()} - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

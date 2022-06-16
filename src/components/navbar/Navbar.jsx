import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
/* import logo from "../../assets/logo.svg"; */
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <h1
          className="gpt3__navbar-links_logo"
          style={{ color: "white", fontFamily: "var(--font-family)" }}
        >
          <i> {"<Scriptzo />"}</i>
        </h1>
        {/*  <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div> */}
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            <a href="#services">Services</a>
          </p>
          <p>
            <a href="#technologies">Technologies</a>
          </p>
          <p>
            <a href="#projects">Projects</a>
          </p>
          {/*   <p>
            <a href="#blog">Meet the Team</a>
          </p> */}
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        {/*  <p>Sign in</p> */}
        <a href="#contact">
          <button type="button">Contact Us</button>
        </a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p>
                <a href="#about">About</a>
              </p>
              <p>
                <a href="#services">Services</a>
              </p>
              <p>
                <a href="#technologies">Technologies</a>
              </p>
              <p>
                <a href="#projects">Projects</a>
              </p>
              {/*   <p>
                <a href="#blog">Meet the Team</a>
              </p> */}
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              {/*    <p>Sign in</p> */}
              <a href="#contact">
                <button type="button">Contact Us</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

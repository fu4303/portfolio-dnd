import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { myFunction, addMyCloseFunction } from "../helper";
import Menu from "./Menu";

const Navbar = ({ color, title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    document.querySelector("#burger").addEventListener("click", () => {
      setIsMenuOpen(true);
      myFunction();
      addMyCloseFunction(setIsMenuOpen);
    });
  }, []);
  return (
    <>
      {!isMenuOpen && (
        <nav
          className="navbar is-hidden-desktop"
          style={{ backgroundColor: color }}
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link className="navbar-item is-size-4" to="/">
              {title}
            </Link>

            <div className="navbar-burger" id="burger">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </div>
          </div>
        </nav>
      )}

      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 50,
          }}
        >
          <Menu />
        </div>
      )}
    </>
  );
};

export default Navbar;

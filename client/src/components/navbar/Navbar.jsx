// Navbar.jsx
import React, { useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoLogoGitlab } from "react-icons/io5";
import { RxGithubLogo } from "react-icons/rx";
import { BiLogoFirebase } from "react-icons/bi";
import { RiAngularjsLine } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from '@mui/material';


const Navbar = ({ darkMode, handleDarkMode, numCartItems }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/')

  }


  // cart increndcqdb


  return (
    <nav className="navbar navbar-expand-lg border-bottom py-3">
      <div className="container">
        {/* Brand Icons */}
        <Link to="/" className="d-flex align-items-center">
          {/* <RxGithubLogo size={40} /> */} &nbsp;&nbsp;&nbsp;&nbsp;
          <RiAngularjsLine size={40} />
          &nbsp;&nbsp;&nbsp;
        </Link>
        &nbsp;
        {/* Brand Name */}
        <Link className="navbar-brand fw-bold" to="/">
          <IoLogoGitlab /> DevOutlet <IoLogoGitlab />
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded={showNavbar}
          aria-label="Toggle navigation"
          onClick={() => setShowNavbar(s => !s)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navigation Links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${showNavbar ? "show" : ""
            }`}
          id="navbarContent"
        >
          <ul className="navbar-nav align-items-center gap-3">
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Hi, <BiLogoFirebase /> Aniket <BiLogoFirebase />
              </NavLink>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contect">
                Contact
              </Link>
            </li>

            {isLoggedIn ? (
              <li className="nav-item">
                <Link className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
              </li>

            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            )}


            <li className="nav-item">
              <Link className="nav-link fw-bold position-relative" to="/cart">
                <Badge
                  badgeContent={numCartItems}
                  color="secondary"
                  showZero
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <ShoppingCartOutlined />
                </Badge>
                {/* &nbsp;&nbsp;&nbsp;{numCartItems} */}
              </Link>
            </li>


            <li className="nav-item d-flex align-items-center">
              {/* Theme Toggle Switch (controlled input) */}
              <div className="form-check form-switch mb-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="toggleSwitch"
                  checked={darkMode}               // controlled
                  onChange={handleDarkMode}        // must provide onChange for checked
                  aria-label="Toggle dark mode"
                />
                <label className="ms-2 mb-0" htmlFor="toggleSwitch">
                  {darkMode ? "Dark" : "Light"}
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

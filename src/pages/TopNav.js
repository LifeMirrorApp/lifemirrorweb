import React, { useState } from "react";
import {
  FiUser,
  FiBell,
  FiSettings,
  FiHome,
  FiSearch,
  FiLightbulb,
  FiEdit,
  FiClock,
  FiFlag,
} from "react-icons/fi";

import "./TopNav.css";
import { FiHelpCircle } from "react-icons/fi";
const TopNav = () => {
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDesktopMenu = () => {
    setDesktopMenuOpen(!desktopMenuOpen);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>
      {/* Desktop Top Navigation (Full Menu) */}
      <div className="top-nav desktop-only shadowss">
        <div className="header ">
          <div className="header-left ">
            <a
              className="logo"
              href="/vision"
              style={{ fontWeight: "800", color: "black", fontSize: "25px" }}
            >
              {/*}  <img src={lg} style={{ width: "30px", height: "30px" }} />*/}
              DreamSimu
            </a>
          </div>
          <ul className="nav user-menu ">
            <li className="nav-item dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                style={{ size: "30px", fontSize: "30px" }}
              >
                <FiBell />
                <span className="badge">2</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a href="/settings" className="dropdown-toggle">
                <FiSettings />
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href="javascript:void(0);"
                className="dropdown-toggle"
                onClick={toggleDesktopMenu}
              >
                <FiUser />
              </a>
              <div
                className={`dropdown-menu ${desktopMenuOpen ? "show" : ""}`}
                onClick={(e) => e.stopPropagation()}
              >
                <a className="dropdown-item" href="/profile">
                  My Profile
                </a>
                <a className="dropdown-item" href="/settings">
                  Settings
                </a>
                <a className="dropdown-item" href="/login">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Top Navigation (Logo + Profile Icon Only) */}
      <div className="top-nav mobile-only" style={{ textDecoration: "none" }}>
        <a className="logo" href="/" style={{ textDecoration: "none" }}>
          {/*<img src={lg} style={{ width: "30px", height: "30px" }} />*/}{" "}
          DreamSimu
        </a>

        <div className="nav-icons">
          {/* Notification Icon */}
          <li className="nav-item dropdown">
            <a href="#" className="dropdown-toggle">
              <FiBell />
              <span className="badge">2</span>
            </a>
          </li>
          <a
            href="javascript:void(0);"
            className="dropdown-toggle"
            onClick={toggleMobileMenu}
          >
            <FiUser />
          </a>

          {/* Settings Icon */}
        </div>

        {/* Profile Dropdown Menu */}
        <div
          className={`dropdown-menu ${mobileMenuOpen ? "show" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <a className="dropdown-item" href="/profile">
            My Profile
          </a>
          <a className="dropdown-item" href="/settings">
            Settings
          </a>
          <a className="dropdown-item" href="/login">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;

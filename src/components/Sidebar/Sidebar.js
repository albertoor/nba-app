import React, { useState } from "react";
import "./Sidebar.css";
import logo from "./ballon.png";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const handleClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "white" }}>
        <div className="sidebar">
          <div className="sidebar-menu-icon" onClick={handleClick}>
            {showSidebar ? (
              <FaBars size="30px" style={{ cursor: "pointer" }} />
            ) : (
              <FaTimes size="30px" style={{ cursor: "pointer" }} />
            )}
          </div>
          {showSidebar ? (
            <div className="sidebar-menu-closed"></div>
          ) : (
            <div
              className={showSidebar ? "sidebar-menu" : "sidebar-menu active"}
            >
              <div className="sidebar-welcome">
                <h3>Welcome to BaMaster Basketball App</h3>
                <img src={logo} alt="logo" srcset="" />
                <figcaption>
                  <p>Icon by </p>
                  <a href="https://www.flaticon.com/authors/prettycons">
                    PrettyIcons
                  </a>
                </figcaption>
              </div>

              <div className="sidebar-options">
                <div className="sidebar-option">
                  <div className="sidebar-option-header main-option-header">
                    <h4>Players</h4>
                  </div>
                  <div className="sidebar-option-choose-option">
                    <Link to="/players">➡️ Get All Players</Link>
                  </div>
                </div>
                <div className="sidebar-option">
                  <div className="sidebar-option-header">
                    <h4>Teams</h4>
                  </div>
                  <div className="sidebar-option-choose-option">
                    <Link to="/teams">➡️ Get All Teams</Link>
                  </div>
                </div>
                <div className="sidebar-option">
                  <div className="sidebar-option-header">
                    <h4>Games</h4>
                  </div>
                  <div className="sidebar-option-choose-option">
                    <Link to="/games">➡️ Get All Games</Link>
                  </div>
                </div>
                <div className="sidebar-option">
                  <div className="sidebar-option-header">
                    <h4>Stats</h4>
                  </div>
                  <div className="sidebar-option-choose-option">
                    <Link to="/stats">➡️ Get All Stats</Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;

import React from "react";
import "./Sidebar.css";
import logo from "./ballon.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-welcome">
        <h3>Welcome to BaMaster Basketball App</h3>
        <img src={logo} alt="logo" srcset="" />
        <figcaption>
          <p>Icon by </p>
          <a href="https://www.flaticon.com/authors/prettycons">PrettyIcons</a>
        </figcaption>
      </div>

      <div className="sidebar-options">
        <div className="sidebar-option">
          <ul className="sidebar-players">
            <li>
              <a href="http://">➡️ Get Specific Player</a>
            </li>
            <li>
              <a href="http://">➡️ Get All Players</a>
            </li>
          </ul>
        </div>

        <div className="sidebar-option">
          <ul className="sidebar-teams">
            <li>
              <a href="http://">➡️ Get All Teams</a>
            </li>
            <li>
              <a href="http://">➡️ Get a Specific Team</a>
            </li>
          </ul>
        </div>

        <div className="sidebar-option">
          <ul className="sidebar-games">
            <li>
              <a href="http://">
                <li>➡️ Get a Specific Game</li>
              </a>
            </li>
            <li>
              <a href="http://">➡️ Get All Games</a>
            </li>
          </ul>
        </div>

        <div className="sidebar-option">
          <ul className="sidebar-stats">
            <li>
              <a href="http://">➡️ Get All Stats</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

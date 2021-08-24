import React from "react";
import "./Sidebar.css";
import logo from "./ballon.png";
import { Link } from "react-router-dom";

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
          <div className="sidebar-option-header main-option-header">
            <h4>Players</h4>
          </div>
          <div className="sidebar-option-choose-option">
            <Link to="/player">➡️ Get Specific Player</Link>
            <Link to="/players">➡️ Get All Players</Link>
          </div>
        </div>

        <div className="sidebar-option">
          <div className="sidebar-option-header">
            <h4>Teams</h4>
          </div>
          <div className="sidebar-option-choose-option">
            <Link to="/teams">➡️ Get All Teams</Link>
            <Link to="/team">➡️ Get a Specific Team</Link>
          </div>
        </div>

        <div className="sidebar-option">
          <div className="sidebar-option-header">
            <h4>Games</h4>
          </div>
          <div className="sidebar-option-choose-option">
            <Link to="/game">➡️ Get a Specific Game</Link>
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
  );
};

export default Sidebar;
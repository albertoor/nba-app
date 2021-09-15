import React from "react";
import { Link } from "react-router-dom";
import logo from "./ballon.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <h3>Welcome to BaMaster Basketball App</h3>
        <img src={logo} alt="logo" srcset="" />
        <figcaption>
          <p>Icon by </p>
          <a href="https://www.flaticon.com/authors/prettycons">PrettyIcons</a>
        </figcaption>
      </div>

      <div className="navbar-options">
        <div className="navbar-option">
          <div className="navbar-option-choose-option">
            <Link to="/players">➡️ Get All Players</Link>
          </div>
        </div>
        <div className="navbar-option">
          <div className="navbar-option-choose-option">
            <Link to="/teams">➡️ Get All Teams</Link>
          </div>
        </div>
        <div className="navbar-option">
          <div className="navbar-option-choose-option">
            <Link to="/games">➡️ Get All Games</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "./Players.css";
import usePlayers from "../../hooks/usePlayers";
import renderIcon from "../renderIcon";
import Loader from "react-loader-spinner";

const Players = () => {
  const players = usePlayers();

  return (
    <div className="players-container">
      <h1>Players</h1>
      <table>
        <tr>
          <th>Full Name</th>
          <th>Position</th>
          <th>Team</th>
          <th>Icon</th>
        </tr>
        {players.map((player) => (
          <tr>
            <td>
              {player.first_name} {player.last_name}
            </td>
            <td>{player.position}</td>
            <td>{player.team.full_name}</td>
            <td>{renderIcon(player.team.abbreviation)}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Players;

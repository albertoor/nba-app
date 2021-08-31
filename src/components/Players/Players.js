import React from "react";
import "./Players.css";
import usePlayers from "../../hooks/usePlayers";

const Players = () => {
  const players = usePlayers();

  return (
    <div className="players-container">
      <table>
        <tr>
          <th>Full Name</th>
          <th>Position</th>
          <th>Team</th>
        </tr>
        {players.map((player) => (
          <tr>
            <td>
              {player.first_name} {player.last_name}
            </td>
            <td>{player.position}</td>
            <td>{player.team.full_name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Players;

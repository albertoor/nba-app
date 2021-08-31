import React from "react";
import usePlayers from "../../hooks/usePlayers";

const Players = () => {
  const players = usePlayers();

  return (
    <div>
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

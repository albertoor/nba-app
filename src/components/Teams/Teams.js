import React from "react";
import "./Teams.css";
import useTeams from "../../hooks/useTeams";
import renderIcon from "../renderIcon";

const Teams = () => {
  const teams = useTeams();

  return (
    <div className="teams-container">
      <h1>Teams</h1>
      <table>
        <tr>
          <th>Abbreviation</th>
          <th>City</th>
          <th>Conference</th>
          <th>Division</th>
          <th>Full Name</th>
          <th>Name</th>
          <th>Abbreviation</th>
        </tr>
        {teams.map((team, key) => (
          <tr key={key}>
            <td>{team.abbreviation} </td>
            <td>{team.city}</td>
            <td>{team.conference}</td>
            <td>{team.division}</td>
            <td>{team.full_name}</td>
            <td>{team.name}</td>
            <td>{renderIcon(team.abbreviation)}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Teams;

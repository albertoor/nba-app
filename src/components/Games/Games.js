import React from "react";
import useGames from "../../hooks/useGames";
import "./Games.css";
import renderIcon from "../renderIcon";

const Games = () => {
  const games = useGames();

  return (
    <div>
      {games.map((game) => (
        <div className="game-container">
          <div className="home-team">
            <i>{renderIcon(game.home_team.abbreviation)}</i>
            <h1>{game.home_team.full_name}</h1>
            <h3>{game.home_team_score}</h3>
          </div>
          <div className="versus">
            <h1>VS</h1>
          </div>
          <div className="visitor-team">
            <i>{renderIcon(game.visitor_team.abbreviation)}</i>
            <h1>{game.visitor_team.full_name}</h1>
            <h3>{game.visitor_team_score}</h3>
          </div>
          <div className="more-info">
            <p>{game.season}</p>
            <p>{game.status}</p>
            <p>{game.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Games;

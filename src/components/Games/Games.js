import React, { useState } from "react";
import useGames from "../../hooks/useGames";
import "./Games.css";
import renderIcon from "../renderIcon";
import Moment from "react-moment";
import Loader from "react-loader-spinner";

const Games = () => {
  const games = useGames();

  return (
    <div className="games">
      {games.map((game) => (
        <div className="game-container">
          <div className="date">
            <Moment date={game.date} />
          </div>

          <div className="versus-section">
            <div className="home-team">
              <i>{renderIcon(game.home_team.abbreviation)}</i>
              <h3>{game.home_team.full_name}</h3>
              <h1>{game.home_team_score}</h1>
            </div>
            <div className="versus">
              <h1>-</h1>
            </div>
            <div className="visitor-team">
              <h1>{game.visitor_team_score}</h1>
              <h3>{game.visitor_team.full_name}</h3>
              <i>{renderIcon(game.visitor_team.abbreviation)}</i>
            </div>
          </div>

          <div className="more-info">
            <p>{game.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Games;

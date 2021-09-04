import React from "react";
import useGames from "../../hooks/useGames";

const Games = () => {
  const games = useGames();

  return (
    <div>
      {games.map((game) => (
        <div className="game-container">
          <h1>
            {game.home_team.abbreviation} vs {game.visitor_team.abbreviation}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Games;

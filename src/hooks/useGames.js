import { useState, useEffect } from "react";
import axios from "axios";
import { getAllGamesUrl } from "../constants/apiUrls";
import getCustomOption from "../services/getCustomOptions";

const useGames = () => {
  const [games, setGames] = useState([]);
  let options = getCustomOption(getAllGamesUrl);

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setGames(response.data.data);
      })
      .catch((error) => {
        return error;
      });
  }, [options]);
  return games;
};

export default useGames;

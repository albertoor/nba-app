import { useState, useEffect } from "react";
import axios from "axios";
import { getAllPlayersUrl } from "../constants/apiUrls";
import getCustomOption from "../services/getCustomOptions";

const usePlayers = () => {
  const [players, setPlayers] = useState([]);
  let options = getCustomOption(getAllPlayersUrl);

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setPlayers(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  }, [options]);

  return players;
};

export default usePlayers;

import axios from "axios";
import getCustomOption from "./getCustomOptions";
import { getAllPlayersUrl } from "../constants/apiUrls";

const getAllPlayers = () => {
  let options = getCustomOption(getAllPlayersUrl);
  axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      return error;
    });
};

export default getAllPlayers;

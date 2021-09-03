import { useState, useEffect } from "react";
import getCustomOption from "../services/getCustomOptions";
import axios from "axios";
import { getAllTeamsUrl } from "../constants/apiUrls";

const useTeams = () => {
  const [teams, setTeams] = useState([]);
  let options = getCustomOption(getAllTeamsUrl);

  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setTeams(response.data.data);
      })
      .catch((error) => {
        return error;
      });
  }, [options]);
  return teams;
};

export default useTeams;

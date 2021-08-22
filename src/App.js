import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const options = {
    method: "GET",
    url: process.env.REACT_APP_API_URL,
    params: { per_page: "25", page: "0" },
    headers: {
      "x-rapidapi-host": process.env.REACT_APP_API_HOST,
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return <div className="App">NBA APP</div>;
};

export default App;

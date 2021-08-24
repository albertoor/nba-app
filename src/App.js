import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
// import getAllPlayers from "./services/getAllPlayers";

const App = () => {
  // console.log(getAllPlayers);

  return (
    <Router>
      <div className="container">
        <Sidebar />
      </div>
    </Router>
  );
};

export default App;

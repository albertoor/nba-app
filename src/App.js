import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
// import getAllPlayers from "./services/getAllPlayers";

const App = () => {
  // console.log(getAllPlayers);

  return (
    <div className="container">
      <Sidebar />
    </div>
  );
};

export default App;

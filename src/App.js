import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Players from "./components/Players/Players";
import Teams from "./components/Teams/Teams";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Sidebar />

        <Switch>
          <Route path="/players" component={Players} />
          <Route path="/teams" component={Teams} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

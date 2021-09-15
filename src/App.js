import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Players from "./components/Players/Players";
import Teams from "./components/Teams/Teams";
import Games from "./components/Games/Games";

const App = () => {
  return (
    <Router>
      <div className="container">
        <NavBar />

        <Switch>
          <Route path="/players" component={Players} />
          <Route path="/teams" component={Teams} />
          <Route path="/games" component={Games} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

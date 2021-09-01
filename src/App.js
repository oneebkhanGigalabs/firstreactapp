import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import { useState } from "react";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

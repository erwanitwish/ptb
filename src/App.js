import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

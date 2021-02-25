import React from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import Dash from "./Dash";
import Chart from "./Chart";
import history from "./history"

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path= "/" exact component={Dash} />
        <Route path="/graph" component={Chart} />
    </Switch>
    </Router>
    
  );
}

export default App;

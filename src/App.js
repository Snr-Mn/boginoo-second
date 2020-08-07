import React from 'react';
import './style/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;

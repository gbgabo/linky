import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import history from "./history";
import { Router, Route, Switch } from "react-router-dom";
import Edit from "./pages/Edit";
import Page from "./pages/Page";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Page} />
        <Route path="/edit" exact component={Edit} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

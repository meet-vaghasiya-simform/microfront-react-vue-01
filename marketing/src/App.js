import React from "react";
import {  Router, Route, Switch } from "react-router-dom";

import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default function App( { history }) {
  return (
    <StylesProvider>
      <Router history={history}>
        <Switch>
          <Route path="/pricing" component={Pricing} />
          <Route path="/" exact component={Landing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}

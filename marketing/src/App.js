import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { StylesProvider } from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <Router>
      <StylesProvider>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/pricing" component={Pricing} />
        </Switch>
      </StylesProvider>
    </Router>
  );
}

import React from "react";
import {  Router, Route, Switch } from "react-router-dom";

import { StylesProvider } from "@material-ui/core/styles";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

export default function App( { history }) {
  return (
    <StylesProvider>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin" component={SignIn} />
          <Route path="/auth/signup" component={SignUp} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}

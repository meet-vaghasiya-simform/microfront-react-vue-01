import React from "react";
import {  Router, Route, Switch } from "react-router-dom";

import { StylesProvider } from "@material-ui/core/styles";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

export default function App( { history , onSignIn} ) {
  return (
    <StylesProvider>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin" render={(props) => <SignIn {...props} onSignIn={onSignIn} />} />
          <Route path="/auth/signup" render={(props) => <SignUp {...props} onSignIn={onSignIn} />} />
        </Switch>
      </Router>
    </StylesProvider>
  );
}

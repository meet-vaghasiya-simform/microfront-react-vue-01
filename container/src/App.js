import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState } from "react";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));

export default function App() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Header signedIn={signedIn} onSignOut={() => setSignedIn(false)} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/auth' render={(props) => <AuthApp {...props} onSignIn={() => setSignedIn(true)} />} />
            <Route path='/' component={MarketingApp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

import React, { lazy, Suspense } from "react";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const MarketingApp = lazy(() => import("./components/MarketingApp"));
const AuthApp = lazy(() => import("./components/AuthApp"));

export default function App() {
  const [isSignIn, setIsSignIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/auth' component={AuthApp} />
            <Route path='/' component={MarketingApp} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

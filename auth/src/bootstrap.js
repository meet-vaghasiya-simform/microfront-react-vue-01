import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory , createBrowserHistory } from "history";

const mount = (el, { onNavigate , defaultHistory , initialPath}) => {
  const history = defaultHistory || createMemoryHistory({
     initialEntries: [initialPath],
  });
  onNavigate && history.listen(onNavigate);
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate: ({ pathname: nextPathName }) => {
      const currPath = history.location.pathname;
      if (currPath !== nextPathName) {
        history.push(nextPathName);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("_auth-dev-root");
  if (el) {
    mount(el, {  defaultHistory: createBrowserHistory() });
  }
}

export { mount };

import React from "react";
import { mount } from "auth/AuthApp";
import { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function AuthApp({onSignIn}) {
  const el = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate  } = mount(el.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        // console.log("onNavigate", nextPathName);
        const currPath = history.location.pathname;
        if (currPath !== nextPathName) {
          history.push(nextPathName);
        }
      },
      onSignIn
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={el}></div>;
}

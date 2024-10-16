import React from "react";
import {mount} from "marketing/MarketingApp";
import {useRef, useEffect} from "react";
import {useHistory} from "react-router-dom";

export default function MarketingApp() {
    const el = useRef(null);
    const history = useHistory();
    
    useEffect(() => {
       const {onParentNavigate} = mount(el.current, {
            initialPath: history.location.pathname,
            onNavigate: ({pathname : nextPathName}) => {
                // console.log("onNavigate", nextPathName);

                const currPath = history.location.pathname;
                if(currPath !== nextPathName) {
                    history.push(nextPathName);                    
                }

            }
        });
        history.listen(onParentNavigate)
    }, []);
    

    return <div ref={el}></div>;
}
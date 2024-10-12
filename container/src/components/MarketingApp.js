import React from "react";
import {mount} from "marketing/MarketingApp";
import {useRef, useEffect} from "react";

export default function MarketingApp() {
    const el = useRef(null);
    useEffect(() => {
        mount(el.current);
    }, []);

    return <div ref={el}></div>;
}
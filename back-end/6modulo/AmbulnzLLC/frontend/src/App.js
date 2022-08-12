import React from "react";

// import { Router } from "react-router-dom";
import GlobalState from "./Global/GlobalState";
import { Router } from "./Router/Router";


export default function App() {
  return (
    <>
      <GlobalState>
        <Router />
      </GlobalState>

    </>
  );
}
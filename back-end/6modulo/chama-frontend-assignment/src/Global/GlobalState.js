import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";



export default function GlobalState(props) {
    const header = "Content-Type: application/json";

    const states = {   };
    const setters = {   };
    const requests = {   };
  
    return (
      <GlobalStateContext.Provider value={{ states, setters, requests }}>
        {props.children}
      </GlobalStateContext.Provider>
    );
  }
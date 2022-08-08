import React, { useState, useEffect } from "react";


import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
// import { URL } from "../Constants/Urls";



export default function GlobalState(props) {








    const states = {}
    const setters = {}
    const requests = {}

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    )












}

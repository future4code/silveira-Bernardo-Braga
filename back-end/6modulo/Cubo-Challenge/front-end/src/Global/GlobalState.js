import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
import {useParams} from "react-router-dom"





export default function GlobalState(props) {
// const [restaurants, setrestaurants] = useState([]);

useEffect(() => {},[])

    
    const states = {   }
	const setters = {}
	const requests = {}
	const func = {}
	
    return (
		<GlobalStateContext.Provider value={{states,setters,requests,func, }}>
			{props.children}
		</GlobalStateContext.Provider>
	)
}



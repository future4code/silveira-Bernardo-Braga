import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
import {useParams} from "react-router-dom"
import { URL } from "../Constants/Url";





export default function GlobalState(props) {
	const header = 'Content-Type: application/json'
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [partipation, setPartipation] = useState('');
	const [user, setUser] = useState([])

	
	const postUser = async (body) => {
		/**
		 	body igual a 
			{
				"firstName":"spedro",
				"lastName":"the ksin",
				"participation":"510"
			}
		**/
		
		try {
			const response = await  axios.post(`${URL}/user`, body, header)
			console.log(response.data);

		} catch (error) {
            console.log(error);
            
        }
		
	};
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const getUser = async () => {
		
		try {
			const response = await  axios.get(`${URL}/user`, header)
			console.log(response.data);
			setUser(response)

		} catch (error) {
            console.log(error);
            
        }
		
	};
	const deleteUser = async () => {
		
		 	const body= {
				"id":"b3a55942-6825-4f87-9144-87e1cca39052",
				"firstName":"spedro",
				"lastName":"the ksin"
			}
		
		try {
			const response = await  axios.get(`${URL}/user`, body, header)
			console.log(response.data);
			

		} catch (error) {
            console.log(error);
            
        }
		
	};
    
	useEffect(() => {getUser()},[])
    const states = { firstName, lastName, partipation,user}
	const setters = {setFirstName,setLastName,setPartipation,setUser}
	const requests = {postUser,getUser,deleteUser}
	const func = {}
	
    return (
		<GlobalStateContext.Provider value={{states,setters,requests,func }}>
			{props.children}
		</GlobalStateContext.Provider>
	)
}



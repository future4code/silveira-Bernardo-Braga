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
		console.log(body);
		try {
			const response = await  axios.post(`${URL}/user`, body, header)
			console.log(response.data);

		} catch (error) {
            console.log(error);
            
        }
		
	};
	const getUser = async () => {
		
		try {
			const response = await  axios.get(`${URL}/user`, header)
			console.log(response.data);
			setUser(response)

		} catch (error) {
            console.log(error);
            
        }
		
	};
	const deleteUser = async (body) => {
		/**
		 	body igual a 
			{
				"id":"0594a520-a940-431c-b8b4-57dce76867df",
				"firstName":"spedro",
				"lastName":"the ksin"
			}
		*/
		try {
			const response = await  axios.get(`${URL}/user`, body, header)
			console.log(response.data);
			

		} catch (error) {
            console.log(error);
            
        }
		
	};
    
	useEffect(() => {postUser()},[])
    const states = { firstName, lastName, partipation,}
	const setters = {setFirstName,setLastName,setPartipation}
	const requests = {postUser,getUser,deleteUser}
	const func = {}
	
    return (
		<GlobalStateContext.Provider value={{states,setters,requests,func }}>
			{props.children}
		</GlobalStateContext.Provider>
	)
}



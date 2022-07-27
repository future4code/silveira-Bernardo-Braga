import React, { useState, useEffect } from "react";


import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
import { URL } from "../Constants/Urls";



export default function GlobalState(props) {
  const [user, setUser] = useState({})
  const [userRepos, setUserRepos] = useState([])

  const header = "Content-Type: application/json";

  const getUser = async (name) => {
    try {

      const respose = await axios.get(`${URL}/users/${name}`, header)
      getUserRepositories(name)
      console.log(respose);
      setUser(respose)

    } catch (error) {
      throw new Error('deu errso no getUser')
    }
  }
  const getUserRepositories = async (name) => {
    try {

      const respose = await axios.get(`${URL}/users/${name}/repos`, header)
      console.log(respose.data);
      setUserRepos(respose.data)


    } catch (error) {
      throw new Error('deu erro no getUserRepositories')
    }
  }

  // useEffect(() => { getUser() }, [])

  const states = { user, userRepos };
  const setters = { setUser, setUserRepos };
  const requests = { getUser, getUserRepositories };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}
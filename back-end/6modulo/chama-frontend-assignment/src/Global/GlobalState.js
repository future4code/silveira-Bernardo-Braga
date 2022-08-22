import React, { useState, useEffect } from "react";


import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
import { URL } from "../Constants/Urls";



export default function GlobalState(props) {
  const [user, setUser] = useState({})
  const [userRepos, setUserRepos] = useState([])

  const [userSearch, setUserSearch] = useState([{}])

  const header = "Content-Type: application/json";

  const getUser = async (name) => {
    try {

      const response = await axios.get(`${URL}/users/${name}`, header)
      getUserRepositories(name)


      console.log(response.data);  // response.data.login e response.data.html_url

      const obj = {
        "login": response.data.login, "url": response.data.html_url
      }
      console.log(userSearch);
      console.log(obj);
      userSearch.push(obj)


      // localStorage.setItem('userSearch', JSON.stringify(response.data));



      setUser(response)


    } catch (error) {
      throw new Error('deu erro no getUser')
    }
  }
  const getUserRepositories = async (name) => {
    try {

      const respose = await axios.get(`${URL}/users/${name}/repos`, header)
      // console.log(respose.data);
      setUserRepos(respose.data)


    } catch (error) {
      throw new Error('deu erro no getUserRepositories')
    }
  }

  // useEffect(() => { getUser() }, [])

  const states = { user, userRepos, userSearch };
  const setters = { setUser, setUserRepos, setUserSearch };
  const requests = { getUser, getUserRepositories };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}
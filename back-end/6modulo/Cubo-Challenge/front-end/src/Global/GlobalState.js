import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
import { useParams } from "react-router-dom";
import { URL } from "../Constants/Url";

export default function GlobalState(props) {
  const header = "Content-Type: application/json";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [partipation, setPartipation] = useState("");
  const [user, setUser] = useState([]);

  const postUser = async (body) => {
    try {
      await axios.post(`${URL}/user`, body, header);

      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const response = await axios.get(`${URL}/user`, header);

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    console.log();
    try {
      await axios.delete(`${URL}/user/${id}`);

      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "CuboChallenge-BernardoBraga";
  }, []);

  useEffect(() => {
    getUser();
  }, []);

  const states = { user, firstName, lastName, partipation };
  const setters = { setFirstName, setLastName, setPartipation, setUser };
  const requests = { postUser, getUser, deleteUser };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
}

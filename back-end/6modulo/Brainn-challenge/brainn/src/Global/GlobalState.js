import React, { useState, useEffect } from "react";


import axios from "axios";
import { GlobalStateContext } from "./GlobalStateContext";
import { URL } from "../Constants/Urls";



export default function GlobalState(props) {


    const [loteria, setLoteria] = useState([])
    const [loteriaConcurso, setLoteriaConcurso] = useState([])
    const [concursosById, setConcursoById] = useState({})
    const [idConcurso, setIdConcurso] = useState([])




    const getLoteria = async () => {

        try {

            const response = await axios.get(`${URL}/loterias`)
            // console.log(response.data);
            setLoteria(response.data)

        } catch (err) {
            console.log(err);
        }
    }

    const getLoteriaConcursos = async () => {

        try {

            const response = await axios.get(`${URL}/loterias-concursos`)
            // console.log(response.data);
            setLoteriaConcurso(response.data)



            // for (let i = 0; i < response.data.length; i++) {


            //     let idConcurs = response.data[i].concursoId

            //     // console.log('==========================');
            //     // console.log(idConcurso.length);



            //     // for (let j = 0; j <= idConcurso.length; j++) {
            //     //     console.log('======== app ==============');
            //     //     console.log(idConcurso);
            //     //     console.log(idConcurs);

            //     //     if (idConcurso.length === 0) {
            //     //         console.log('passou aqui');
            //     //         idConcurso.push(idConcurs)
            //     //     }

            //     //     if (idConcurs !== idConcurso[j]) {
            //     //         console.log('nao tem');
            //     //         idConcurso.push(idConcurs)
            //     //     } else {
            //     //         console.log('ja tem');
            //     //         // idConcurso.push(idConcurs)
            //     //     }


            //     // }


            //     const obj = await getConcursosById(idConcurs)



            //     concursosById.push(obj)

            //     idConcurso.push(idConcurs)

            // }
            // console.log(idConcurso);


        } catch (err) {
            console.log(err);
        }
    }

    const getConcursosById = async (id) => {
        console.log(id);
        try {

            const response = await axios.get(`${URL}/concursos/${id}`)
            // console.log(response.data);
            setConcursoById(response.data)

        } catch (err) {
            console.log(err);
        }
    }



    useEffect(() => {
        getLoteria()
        getLoteriaConcursos()

    }, [])

    const states = { loteria, loteriaConcurso, concursosById, idConcurso };
    const setters = { setLoteria, setLoteriaConcurso, setConcursoById };
    const requests = { getLoteria, getConcursosById, getLoteriaConcursos };

    return (
        <GlobalStateContext.Provider value={{ states, setters, requests }}>
            {props.children}
        </GlobalStateContext.Provider>
    );
} 
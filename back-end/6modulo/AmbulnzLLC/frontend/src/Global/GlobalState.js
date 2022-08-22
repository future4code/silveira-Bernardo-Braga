import axios from 'axios'
import { GlobalStateContext } from './GlobalStateContext'
import React, { useEffect, useState } from 'react'
import { URL_DB } from '../Contants/Url'

const HEADER = 'Content-Type: application/json'


export default function GlobalState(props) {

    const [pizza, setPizza] = useState([])
    const [order, setOrder] = useState([])

    const [orderById, setOrderById] = useState([])


    const getPizzas = async () => {
        try {
            const result = await axios.get(`https://ambulnzlcback.herokuapp.com/pizza`)
            setPizza(result.data)
            console.log('chegou getPizzas');

        } catch (err) {
            throw new Error('deu erro no getPizzas')
        }
    }

    const getOrder = async () => {
        try {
            const result = await axios.get(`https://ambulnzlcback.herokuapp.com/orders`)
            setOrder(result.data)
            console.log('chegou getOrder');

        } catch (err) {
            throw new Error('deu erro no getPizzas')
        }
    }

    const getOrderById = async (body) => {
        /**
         * body = { "id":"aqui vem o id da pizza"}
         */
        try {
            const result = await axios.get(`${URL_DB}/ordersById`, HEADER, body)

            setOrderById(result.data)

        } catch (err) {
            throw new Error('deu erro no getOrderById')
        }
    }

    const postPizza = async (body) => {

        try {
            /**
             * {
                "name":"testndo as ordens",
                "price":"32",
                "ingredients":[
                    {
                        "name":"eu"
                    },
                    {
                        "name":"tu"
                    }
                ]
            }
             */

            const result = await axios.post(`${URL_DB}/pizza`, HEADER, body)

        } catch (err) {
            throw new Error('deu erro no postPizza')
        }

    }
    const postOrder = async (body) => {
        /**
         * {
            "namePizza":"testando as ordens",
            "idPizza":"7cbf5296-1507-45f1-8077-1e2882d00de0",
            "quantity":"12"
        }
         */
        try {

            console.log(body);
            await axios.post(`${URL_DB}/orders`, HEADER, body)
            console.log('postOrder deu certo');


        } catch (err) {
            throw new Error(err.message)
        }

    }

    useEffect(() => {
        getPizzas()
    }, [])

    useEffect(() => {
        getOrder()
    }, [])



    const states = { pizza, order, orderById }

    const setters = { setPizza, setOrder, setOrderById }

    const request = { getPizzas, getOrder, getOrderById, postPizza, postOrder }

    return (
        <GlobalStateContext.Provider value={{ states, setters, request }}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
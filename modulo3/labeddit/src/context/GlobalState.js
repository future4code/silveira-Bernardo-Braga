import axios from 'axios'
import { GlobalStateContext } from './GlobalStateContext'
import React, { useState } from 'react'

export default function GlobalState(props){
    const [name,setName] = useState('');
    const [pasword,setPassword] = useState('');
    const [status,setStatus] = useState(false)
    
    
//  https://labeddit.herokuapp.com
    const url = " https://labeddit.herokuapp.com"
    const header = 'Content-Type: application/json'
    
    const postLogin = async (body) => {
// body igual a {"email": "demo.email@gmail.com","password": "demo.password"}
        
        try {
            const response = await axios.post(`${url}/users/login`,body,header)
            console.log('deu certo login');
            console.log(response.data);
            localStorage.setItem('token',response.data.token )
            setStatus(true)
        } catch (error) {
            console.log(error);
            setStatus(false)
        }
        
    }
    const postCheckIn = async (body) => {
// body igual a {"username":"Demo","email": "demo.email@gmail.com","password": "demo.password"}
        console.log(body);
        try {
            const response = await axios.post(`${url}/users/signup`,body,header)
            console.log('deu certo checkin');
            console.log(response.data);
            localStorage.setItem('token',response.data.token )

            return true
        } catch (error) {
            console.log(error);
            return false
        }
        
    }
    const getPosts = async () => {
        try {
            const header = {
                Authorization: localStorage.getItem("token")
            }
            const response = await axios.get(`${url}/posts`, header)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }
    const getPostComments = async (id) => {
        try {
            const header = {
                Authorization: localStorage.getItem("token")
            }
            const response = await axios.get(`${url}/posts/${id}/comments`, header)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }

    const postCreatePost = async (body) => {
        //body tem que ser igual a {"title": "Primeiro","body": "post"}
        try {
            const header = {
                Authorization: localStorage.getItem("token")
            }
            const response = await axios.post(`${url}/posts`,body, header)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }
    const postCreateComment = async (id,body) => {
// body igual a {"body": "Primeiro comentário"}
        try {
            const header = {
                Authorization: localStorage.getItem("token")
            }
            const response = await axios.post(`${url}/posts/${id}/comments`,body, header)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }
    const postCreatePostVote = async (id,body) => {
// body igual a {"direction": 1}
        try {
            const header = {
                Authorization: localStorage.getItem("token")
            }
            const response = await axios.post(`${url}/posts/${id}/votes`,body, header)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }

    const postCreateCommentVote = async (id,body) => {
//body igual a {"direction": 1}
        try {
            const header = {
                Authorization: localStorage.getItem("token")
            }
            const response = await axios.post(`${url}/comments/${id}/votes`,body, header)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }
    const putChangePostVote = async (id,body) => {
//body igual a {"direction": 1}
        try {
            const header = {
                Authorization: localStorage.getItem("token")
            }
            const response = await axios.post(`${url}/posts/${id}/votes`,body, header)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }
    const putChangeCommentVote = async (id,body) => {
//body igual a {"direction": 1}
        try {
            const header = {
                Authorization: localStorage.getItem("token")
            }
            const response = await axios.post(`${url}/comments/${id}/votes`,body, header)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }
    const delDeletePostVote = async (id) => {
        try {
            const header = {
                Authorization: localStorage.getItem("token")
            }
            const response = await axios.post(`${url}/posts/${id}/votes`, header)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }
    const delCommentVote = async (id) => {
        try {
            const header = {
                Authorization: localStorage.getItem("token")
            }
            const response = await axios.post(`${url}/comments/${id}/votes`, header)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }

    
    const states = {name, pasword, status}
    const setters = {setName, setPassword, setStatus}

    const request = {getPosts, getPostComments, postLogin, postCheckIn, postCreatePost, postCreateComment, postCreatePostVote, postCreateCommentVote, putChangePostVote, putChangeCommentVote, delDeletePostVote, delCommentVote}

    return (
			<GlobalStateContext.Provider value={{states,setters,request}}>
				{props.children}
			</GlobalStateContext.Provider>
		)
}
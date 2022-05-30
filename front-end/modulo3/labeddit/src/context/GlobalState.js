import axios from 'axios'
import { GlobalStateContext } from './GlobalStateContext'
import React, { useState } from 'react'
import { goToPage } from '../routes/coordinator';


export default function GlobalState(props){

    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [status,setStatus] = useState(false)
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [post,setPost] = useState([])
    const [postComment,setPostComment] = useState([])
    
    const [votePost,setVotePost] = useState(0)

    
    
    
//  https://labeddit.herokuapp.com
    const url = " https://labeddit.herokuapp.com"

    const header = 'Content-Type: application/json'
    
    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
    
    const postLogin = async (body, navigate, page) => {
// body igual a {"email": "demo.email@gmail.com","password": "demo.password"}
        
        try {
            const response = await axios.post(`${url}/users/login`,body,header)
            // console.log('deu certo login');
            console.log(response.data);
            // localStorage.setItem('token',response.data.token )
            goToPage(navigate,page)
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    const postCheckIn = async (body, navigate, page) => {
// body igual a {"username":"Demo","email": "demo.email@gmail.com","password": "demo.password"}
        console.log(body);
        try {
            const response = await axios.post(`${url}/users/signup`,body,header)
            console.log('deu certo checkin');
            console.log(response.data);
            localStorage.setItem('token',response.data.token )
            goToPage(navigate,page)
            
        } catch (error) {
            console.log(error);
            
        }
        
    }

    const getPosts = async () => {
        try {
            const token = localStorage.getItem("token")
                const headers = {
        headers: {
            Authorization: token
        }
    }
            // console.log(localStorage.getItem("token"))
            const response = await axios.get(`${url}/posts`, headers)
            // console.log('get post deu certo');
            // console.log(response.data);
            setPost(response.data)
            // console.log(post);


        } catch (err) {
            console.log('erro no getPosts');
            console.log(err);
        }
    }

    const getPostComments = async (id) => {
        try {
           
            const response = await axios.get(`${url}/posts/${id}/comments`, headers)
            console.log(response.data);
            setPostComment(response.data)

        } catch (err) {
            console.log(err);
        }
    }

    const postCreatePost = async (body) => {
        //body tem que ser igual a {"title": "Primeiro","body": "post"}
        try {
            
            const response = await axios.post(`${url}/posts`,body, headers)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }

    const postCreateComment = async (id,body) => {
// body igual a {"body": "Primeiro comentário"}
        try {
            const response = await axios.post(`${url}/posts/${id}/comments`,body, headers)
            console.log(response.data);
            setPostComment(...postComment, response.data)

        } catch (err) {
            console.log(err);
        }
    }

    const postCreatePostVote = async (id,body) => {
// body igual a {"direction": 1}
        try {
            const response = await axios.post(`${url}/posts/${id}/votes`,body, headers)
            console.log(response);
            // setVotePost(votePost + 1)

        } catch (err) {
            console.log(err);
        }
    }

    const postCreateCommentVote = async (id,body) => {
//body igual a {"direction": 1}
        try {
            const response = await axios.post(`${url}/comments/${id}/votes`,body, headers)
            console.log(response);
            // setVotePost(votePost + 1)

        } catch (err) {
            console.log(err);
        }
    }

    const putChangePostVote = async (id,body) => {
//body igual a {"direction": 1}
        try {
            const response = await axios.post(`${url}/posts/${id}/votes`,body, headers)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }

    const putChangeCommentVote = async (id,body) => {
//body igual a {"direction": 1}
        try {
            const response = await axios.post(`${url}/comments/${id}/votes`,body, headers)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }

    const delDeletePostVote = async (id) => {
        try {
            const response = await axios.post(`${url}/posts/${id}/votes`, headers)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }

    const delCommentVote = async (id) => {
        try {
            const response = await axios.post(`${url}/comments/${id}/votes`,headers)
            console.log(response);

        } catch (err) {
            console.log(err);
        }
    }

    
    const states = {name, password, status, postTitle, postBody, post, postComment, votePost}

    const setters = {setName, setPassword, setStatus, setPostTitle,setPostBody, setPost, setPostComment, setVotePost}

    const request = {getPosts, getPostComments, postLogin, postCheckIn, postCreatePost, postCreateComment, postCreatePostVote, postCreateCommentVote, putChangePostVote, putChangeCommentVote, delDeletePostVote, delCommentVote}

    return (
			<GlobalStateContext.Provider value={{states,setters,request}}>
				{props.children}
			</GlobalStateContext.Provider>
		)
}
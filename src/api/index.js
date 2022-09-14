import { toUnitless } from "@mui/material/styles/cssUtils";
import { useNavigate, Re } from "react-router-dom";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

const baseURL = 'https://strangers-things.herokuapp.com/api/2206-FTB-ET-WEB-PT'

export const getPosts = async (token) => {
  try {
    const response = await fetch(`${baseURL}/posts`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    });
    const results = await response.json()
    return (results);
    }
  catch (ex) {
    console.log('error getting all posts')
  }
}

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer TOKEN_STRING_HERE'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    const result = await response.json();
    return result;
  }
  catch (ex) {
    console.log('error registering user')
  }

}

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
    const result = await response.json();
    return result;
  }
  catch (ex) {
    console.log('Login Error')
  }
}

export const grabData = async (token) => {
  try{
    const response = await fetch(`${baseURL}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    const result = await response.json();
    return result;
  }
  catch(ex){
    console.log(console.error)
  }
}

export const makePost = async (token, post) => {
  try{
    const response = await fetch(`${baseURL}/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title: post.title,
          description: post.description,
          price: post.price,
          location: post.location,
          willDeliver: post.willDeliver
        }
      })
    })
    const result = await response.json();
    return result;
  }
  catch(ex){
    console.log(console.error)
  }
}

export const deletePost = async(token, _id) => {
  try{
    const response = await fetch(`${baseURL}/posts/${_id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    const result = await response.json();
    console.log("Post successfully deleted")
    // document.location.reload(true)
    return result;
    
    
  }
  catch(ex){
    console.log("Post could not be deleted")
  }
}

export const createMessage = async(token, content, _id) =>{
  try{
    const response = await fetch(`${baseURL}/posts/${_id}/messages`, {
      method: "POST",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        message: {
          content: content
        }
      })
    })
    const result = await response.json();
    console.log(result)
    return result
  }
  catch(ex){
    console.log(console.error)
  }
}

export const updatePost = async ({token, title, description, price, location, willDeliver, _id}) => {
  try {
    const response = await fetch(`${baseURL}/posts/${[_id]}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post: {
          title,  
          description,
          price,
          location,
          willDeliver
        }
      })
    })
    const result = await response.json();
    console.log("Post Successfully Edited!")
    return result;
  } 
  catch(ex) {
    console.log(console.error)
  }
}
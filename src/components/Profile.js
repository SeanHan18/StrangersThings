import React from 'react';
import { Link } from 'react-router-dom';
import { grabData } from '../api';

const Profile = ({ messages }) => {
    const username = window.localStorage.getItem('username')
    const token = window.localStorage.getItem('token')
    // const userInfo = grabData(token)
    // const myMessages = userInfo.posts.messages
    // console.log(username)
    
    if (token){
        // console.log(grabData(token))
    return (
        <div>
            <div id='FlexContainer2'>
        <h1 id='WelcomeMessage'>Welcome {`${username}`}</h1>
        </div>
        <h2 className='MyMessageTitle'>Messages to Me:</h2>
        {
            messages.map((message => { 
                const {fromUser, content, _id } = message
                if(fromUser.username !== username){
                return (
                    <div className='MessageContent' key={_id}>
                        <h4>From: {fromUser.username}</h4>
                        <p>{content}</p>
                        </div>
                )}
            }))
        }
        <h2 className='MyMessageTitle'>Messages from Me:</h2>
        {
            messages.map((message => { 
                const {fromUser, content, _id } = message
                if(fromUser.username === username){
                return (
                    <div className='MessageContent' key={_id}>
                        <h4>Sent by Me:</h4>
                        <p>{content}</p>
                        </div>
                )}
            }))
        }
        </div>
    )
    }
else {
    return (
        <h1>Please log in to view Profile information</h1>
    )
}
}

export default Profile
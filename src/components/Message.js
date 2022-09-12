import React from "react";
import { useState } from "react";
import { createMessage } from "../api";
import { Button } from "@mui/material";

const Message = ({ navigate, fetchMessages }) => {
    const Recipient = window.localStorage.getItem('thisPost')
    const [content, typeContent] = useState('')
    const ID = window.localStorage.getItem('ID')
    const token = window.localStorage.getItem('token')
    const handleSubmit = async () => {
        const results = await createMessage(token, content, ID);
        if (results.success) {
            fetchMessages()
            navigate('./profile')
            return (
                console.log("Message Sent")
            )
        } else {
            console.log("Unable to send Message")
            console.log(console.error)
            console.log(ID)
        }
    }
    return (
        <form id="MessageContainer" onSubmit={(event) => {
            event.preventDefault()
            handleSubmit();
        }}>
            <h3 id="MessageRecipient" >Type your Message to {`${Recipient}`} Below:</h3>
            <input id='InputMessage'
                type='content'
                placeholder='Enter Message'
                onChange={(event) => typeContent(event.target.value)}
            />
            <Button id='MessageSubmitButton' variant="contained" color="success" type='submit'>Submit</Button>
        </form> 
    )
}

export default Message
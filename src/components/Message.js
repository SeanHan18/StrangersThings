import React from "react";
import { useState } from "react";
import { createMessage } from "../api";

const Message = () => {
    const Recipient = window.localStorage.getItem('thisPost')
    const [content, typeContent] = useState('')
    const ID = window.localStorage.getItem('ID')
    const token = window.localStorage.getItem('token')
    const handleSubmit = async () => {
        const results = await createMessage(token, content, ID);
        if (results.success) {
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
        <form onSubmit={(event) => {
            event.preventDefault()
            handleSubmit();
        }}>
            <h2>Type your Message to {`${Recipient}`} Below</h2>
            <input
                type='content'
                placeholder='Enter Message'
                onChange={(event) => typeContent(event.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Message
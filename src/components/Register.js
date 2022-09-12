import React, { useState } from 'react';
import { registerUser } from '../api';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Register = ({setToken, navigate}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const results = await registerUser(username, password);
        if (results.success) {
        setToken(results.data.token)
        window.localStorage.setItem('token', results.data.token)
        window.localStorage.setItem('username', username)
        navigate('/profile');
        } else {
            console.log(results.error.message)
        }
    }

    return (
       <form id='LoginContainer' onSubmit={(event) => {
        event.preventDefault()
        handleSubmit();
       }}>
           <h1>Register</h1>
           <input
           className='PostInput'
            type='text'
            placeholder='Enter Username'
            onChange={(event) => setUsername(event.target.value)}
            />
            <input
            className='PostInput'
            type='password'
            placeholder='Enter Password'
            onChange={(event) => setPassword(event.target.value)}
            />
            <Button variant='contained' color='success' type='submit'>Register</Button>
            <div>
             {/* <Link to='/Login'>Existing User? Click Here to Login</Link> */}
             </div>
       </form>
    )
}

export default Register;
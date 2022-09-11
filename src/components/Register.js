import React, { useState } from 'react';
import { registerUser } from '../api';
import { Link } from 'react-router-dom';

const Register = ({setToken, navigate}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const results = await registerUser(username, password);
        if (results.success) {
        setToken(results.data.token)
        window.localStorage.setItem('token', results.data.token)
        navigate('/profile');
        } else {
            console.log(results.error.message)
        }
    }

    return (
       <form onSubmit={(event) => {
        event.preventDefault()
        handleSubmit();
       }}>
           <h1>Register</h1>
           <input
            type='text'
            placeholder='Enter Username'
            onChange={(event) => setUsername(event.target.value)}
            />
            <input
            type='password'
            placeholder='Enter Password'
            onChange={(event) => setPassword(event.target.value)}
            />
            <button type='submit'>Register</button>
            <div>
             <Link to='/Login'>Existing User? Click Here to Login</Link>
             </div>
       </form>
    )
}

export default Register;
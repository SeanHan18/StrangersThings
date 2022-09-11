import React, {useState} from 'react';
import { loginUser } from '../api';
import { Link } from 'react-router-dom';

import { grabData } from '../api';

const Login = ({setToken, navigate}) => {

    const [username, checkUsername] = useState('')
    const [password, checkPassword] = useState('')

    const handleSubmit = async () => {
        const results = await loginUser(username, password);
        if (results.success) {
        setToken(results.data.token)
        window.localStorage.setItem('token', results.data.token)
        window.localStorage.setItem('username', username)
        console.log(results.data.message)
        // console.log(results)
        // grabData()
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
            <h1>Login</h1>
            <input
             type='text'
             placeholder='Enter Username'
             onChange={(event) => checkUsername(event.target.value)}
             />
             <input
             type='password'
             placeholder='Enter Password'
             onChange={(event) => checkPassword(event.target.value)}
             />
             <button type='submit'>Login</button>
             <div>
             <Link to='/Register'>New User? Click Here to Register</Link>
             </div>
        </form>
        
     )
 
}


export default Login
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({logout}) => {
    let token = window.localStorage.getItem('token')
    if (!token){
    return (
        <header>
            <nav className='nav-bar'>
                <Link to='/home'>Home</Link>
                <Link to='/posts'>Posts</Link>
                {/* <Link to='/profile'>Profile</Link> */}
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                {/* <Link to='/' onClick={ () => logout() */}
                {/* }>Logout</Link> */}
            </nav>
        </header>
    )
}
else {
    return (
        <header>
        <nav className='nav-bar'>
            <Link to='/home'>Home</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/profile'>Profile</Link>
            {/* <Link to='/register'>Register</Link> */}
            {/* <Link to='/login'>Login</Link> */}
            <Link to='/home' onClick={ () => logout()
            }>Logout</Link>
        </nav>
    </header>
    )
}
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({logout}) => {
    let token = window.localStorage.getItem('token')
    if (!token){
    return (
        <header>
            <nav className='nav-bar'>
                <div id='navtitle'>
                    Stranger's Things
                </div>
                <ul className='navlist'> 
                <Link to='/home'>Home</Link>
                <Link to='/posts'>Posts</Link>
                {/* <Link to='/profile'>Profile</Link> */}
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
                {/* <Link to='/' onClick={ () => logout() */}
                {/* }>Logout</Link> */}
                </ul>
            </nav>
        </header>
    )
}
else {
    return (
        <header>
        <nav className='nav-bar'>
        <div id='navtitle'>
                    Stranger's Things
                </div>
            <ul className='navlist'>
            <Link className='anchor' to='/home'>Home</Link>
            <Link className='anchor' to='/posts'>Posts</Link>
            <Link className='anchor' to='/profile'>Profile</Link>
            {/* <Link to='/register'>Register</Link> */}
            {/* <Link to='/login'>Login</Link> */}
            <Link to='/home' onClick={ () => logout()
            }>Logout</Link>
            </ul>
        </nav>
    </header>
    )
}
}

export default Navbar;
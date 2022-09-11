import React, { useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { Route, BrowserRouter, Routes, useNavigate } from 'react-router-dom'
import {
    Navbar,
    Posts,
    Profile,
    Home,
    Register,
    Login,
    CreatePost,
    SinglePostView,
    Message,
    EditPost
} from './components';

import {
    getPosts,
    grabData
} from './api';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [messages, setMessages] = useState([])
    const [token, setToken] = useState('');
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    // console.log(token)

    function logout() {
        window.localStorage.removeItem('token');
        setToken('');
        setUser({});
    }

    async function fetchPosts() {
        const results = await getPosts(token)
        setPosts(results.data.posts);
    }

    async function getMe() {
        const storedToken = window.localStorage.getItem('token');

        if (!token) {
            setToken(storedToken);
            return;
        }

        const results = await grabData(token)
        if (results.success) { setUser(results.data);}
        else {
            console.log(results.error.message);
        }
        console.log(user)
    }
    async function fetchMessages() {
        const results = await grabData(token)
        console.log(grabData(token))
        setMessages(results.data.messages)
    }


    useEffect(() => {
        fetchPosts()
    }, [token])

    useEffect(() => {
        getMe();
    }, [token])

    useEffect(() => {
        fetchMessages();
    }, [token])


    return (
        <div>
            <Navbar logout={logout} />
            <Routes>
                < Route path='/home' element={<Home />} />
                < Route path='/posts' element={<Posts posts={posts} />} />
                < Route path='/Profile' element={<Profile setUser={setUser} messages={messages} />} />
                < Route path='/register' element={<Register setToken={setToken} navigate={navigate} />} />
                < Route path='/Login' element={<Login setToken={setToken} navigate={navigate} />} />
                < Route path='/CreatePost' element={<CreatePost setToken={setToken} navigate={navigate} fetchPosts={fetchPosts} />} />
                < Route path='/posts/:id' element={<SinglePostView posts={ posts } />}/>
                < Route path='/Message' element={<Message/>}/>
                < Route path='/posts/edit-post/:postID' element={<EditPost posts={posts} token={token}/>}/>
            </Routes>
        </div>
    )
}

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

/*
Login
Registration
Posts
Profile
Navbar
AddPost

*/
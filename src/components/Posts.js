import React, {Fragment, useState} from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../api';
import { Button } from '@mui/material';

const Posts = ({ posts }) => {
    const token = window.localStorage.getItem('token')
    const [searchTerm, setSearchTerm] = useState('');

    function postMatches(post, text) {
        if (post.title.toLowerCase().includes(text.toLowerCase()) || post.description.toLowerCase().includes(text.toLowerCase()) || post.price.toLowerCase().includes(text.toLowerCase()) || post.location.toLowerCase().includes(text.toLowerCase())) {
            return true
        }
        else {
            return false
        }
    }
    
    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;

    if (searchTerm.length) {
        return (
            <Fragment>
                <span id='postHead'>
                <form onSubmit={(event) => {
        event.preventDefault()
       }}>
           <h3>Search</h3>
           <input
            type='text'
            placeholder='Search'
            onChange={(event) => setSearchTerm(event.target.value)}
            />
            <Link to='/CreatePost'>
            <Button id='createPostButton'variant='contained' color='success' style={{margin:'0 0 .5rem 0'}}>
            Create Post
            </Button>
            </Link> 
       </form>
       </span>
                {
                    postsToDisplay.map((post)=> {
                        const {description, location, price, title, _id, isAuthor} = post;
                return (
                    <main>
                    <div id='Posts'>
                    <div id='Post' key={_id}>
                    <h3 id='PostTitle'>{title}</h3>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Price:</strong> {price}</p>
                    <p><strong>Location:</strong> {location}</p>
                    {
                        isAuthor ? (
                            <div>
                                <Link to={`/posts/edit-post/${_id}`}>
                            <button>Edit</button>
                                </Link>
                            <button onClick={() => {deletePost(token, _id)}}>Delete</button>
                            </div>
                        ) : (
                            <Link to={`/posts/${_id}`}>
                            <button onClick={() => {window.localStorage.setItem('thisPost', post.author.username), console.log(post.author.username)}}>
                                View
                            </button>
                            </Link>
                        )
                    }
                    </div>
                    </div>
                    </main>
                )
                    })
                }
            </Fragment>
            
        )
    }
    else{

    return (
        <Fragment>
            <span id='postHead'>
            <form onSubmit={(event) => {
        event.preventDefault()
       }}>
           <h3>Search</h3>
           <input
            type='text'
            placeholder='Search'
            onChange={(event) => setSearchTerm(event.target.value)}
            />
            <Link to='/CreatePost'>
            <Button id='createPostButton'variant='contained' color='success'>
            Create Post
            </Button>
            </Link>  
       </form>
       </span>
        {
            posts.map((post) => {
                const {description, location, price, title, _id, isAuthor} = post;
                return (
                    <main>
                    <div id='Posts'>
                    <div id='Post' key={_id}>
                    <h3 id='PostTitle'>{title}</h3>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Price:</strong> {price}</p>
                    <p><strong>Location:</strong> {location}</p>
                    {
                        isAuthor ? (
                            <div>
                                <Link to={`/posts/edit-post/${_id}`}>
                            <button>Edit</button>
                                </Link>
                            <button onClick={() => {deletePost(token, _id)}}>Delete</button>
                            </div>
                        ) : (
                            <Link to={`/posts/${_id}`}>
                            <button onClick={() => {window.localStorage.setItem('thisPost', post.author.username), console.log(post.author.username)}}>
                                View
                            </button>
                            </Link>
                        )
                    }
                    </div>
                    </div>
                    </main>
                )
            })
        }
        </Fragment>
)
    }
}

export default Posts
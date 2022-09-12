import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { deletePost } from '../api';
import { Button } from '@mui/material';

const Posts = ({ posts }) => {
    const token = window.localStorage.getItem('token')
    const [searchTerm, setSearchTerm] = useState('');
    let delivery = ''

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
                    <form className='top' onSubmit={(event) => {
                        event.preventDefault()
                    }}>
                        {/* <h3>Search</h3> */}
                        <input
                            className='searchbar'
                            type='text'
                            placeholder='Search'
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                        <Link to='/CreatePost'>
                            <Button id='createPostButton' variant='contained' color='success'>
                                Create Post
                            </Button>
                        </Link>
                    </form>
                </span>
                {
                    postsToDisplay.map((post) => {
                        const { description, location, price, title, _id, isAuthor, willDeliver } = post;
                        if (JSON.stringify(willDeliver) == 'true'){
                            delivery = 'Yes'
                        }
                        else {
                            delivery = 'No'
                        }
                        return (
                            <main>
                                <div id='Posts'>
                                    <div id='Post' key={_id}>
                                        <h3 id='PostTitle'>{title}</h3>
                                        <p><strong>Description:</strong> {description}</p>
                                        <p><strong>Price:</strong> {price}</p>
                                        <p><strong>Location:</strong> {location}</p>
                                        <p><strong>Available for Delivery:</strong>{delivery}</p>
                                        {
                                            isAuthor ? (
                                                <div>
                                                    <Link to={`/posts/edit-post/${_id}`}>
                                                        <Button variant='contained' color='success'>Edit</Button>
                                                    </Link>
                                                    <Button variant='contained' color='error' onClick={() => { deletePost(token, _id) }}>Delete</Button>
                                                </div>
                                            ) : (
                                                <Link to={`/posts/${_id}`}>
                                                    <Button id='viewbutton' variant='contained' color='success' onClick={() => { window.localStorage.setItem('thisPost', post.author.username), console.log(post.author.username) }}>
                                                        View
                                                    </Button>
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
    else {

        return (
            <Fragment>
                <span id='postHead'>
                    <form className='top' onSubmit={(event) => {
                        event.preventDefault()
                    }}>
                        {/* <h3>Search</h3> */}
                        <input
                            className='searchbar'
                            type='text'
                            placeholder='Search'
                            onChange={(event) => setSearchTerm(event.target.value)}
                        />
                        <Link to='/CreatePost'>
                            <Button id='createPostButton' variant='contained' color='success'>
                                Create Post
                            </Button>
                        </Link>
                    </form>
                </span>
                {
                    posts.map((post) => {
                        const { description, location, price, title, _id, isAuthor, willDeliver } = post;
                        // console.log(willDeliver)
                        if (JSON.stringify(willDeliver) == 'true'){
                            delivery = 'Yes'
                        }
                        else {
                            delivery = 'No'
                        }
                        return (
                            <main>
                                <div id='Posts'>
                                    <div id='Post' key={_id}>
                                        <h3 id='PostTitle'>{title}</h3>
                                        <p><strong>Description:</strong> {description}</p>
                                        <p><strong>Price:</strong> {price}</p>
                                        <p><strong>Location:</strong> {location}</p>
                                        <p><strong>Available for Delivery:</strong>{delivery}</p>
                                        {
                                            isAuthor ? (
                                                <div>
                                                    <Link to={`/posts/edit-post/${_id}`}>
                                                        <Button variant='contained' color='success'>Edit</Button>
                                                    </Link>
                                                    <Button variant='contained' color='error' onClick={() => { deletePost(token, _id) }}>Delete</Button>
                                                </div>
                                            ) : (
                                                <Link to={`/posts/${_id}`}>
                                                    <Button id='viewbutton' variant='contained' color='success' onClick={() => { window.localStorage.setItem('thisPost', post.author.username), console.log(post.author.username) }}>
                                                        View
                                                    </Button>
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
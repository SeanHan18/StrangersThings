import React, {useState} from 'react';
import { makePost } from '../api';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const CreatePost = ({fetchPosts, navigate}) => {

    const token = window.localStorage.getItem('token')
    const [title, itemTitle] = useState('')
    const [description, itemDescription] = useState('')
    const [price, itemPrice ] = useState('')
    const [location, itemLocation] = useState('')
    const post = {title : title, description: description, price : price, location: location}

    const handleSubmit = async () => {
        const results = await makePost(token, post)
        if (results.success) {
            fetchPosts()
            navigate('/posts');
            return(
                <div>
                    <h3>{title}</h3>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Price:</strong> {price}</p>
                    <p><strong>Location:</strong> {location}</p>
                    </div>
            )
        }
        else {
            console.log(results.error.message)
        }
    }

return (
<form onSubmit={(event) => {
    event.preventDefault()
    handleSubmit();
   }}>
       <h1>Create a Post</h1>
       <div>
        {/* Name: */}
       <input
        type='name'
        placeholder='Enter Item Name'
        onChange={(event) => itemTitle(event.target.value)}
        />
        </div>
        <div>
        {/* Description: */}
        <input
        type='description'
        placeholder='Enter Item Description'
        onChange={(event) => itemDescription(event.target.value)}
        />
        </div>
        <div>
        {/* Price:      */}
        <input
        type='price'
        placeholder='Enter Asking Price'
        onChange={(event) => itemPrice(event.target.value)}
        />
        </div>
        <div>
        {/* Location: */}
        {/* <span>  </span> */}
        <input
        type='location'
        placeholder='Enter Location'
        onChange={(event) => itemLocation(event.target.value)}
        />
        </div>
        <Button type='submit' variant='contained' color='success'>Submit</Button>
        <Link to='/Posts' ><Button variant='contained' color='success' style={{margin: '2rem'}}>Back</Button></Link>
   </form>
)
}

export default CreatePost
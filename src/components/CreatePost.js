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
    const [willDeliver, setWillDeliver] = useState()
    const post = {title : title, description: description, price : price, location: location, willDeliver: willDeliver}

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
                    <p><strong>Available for Delivery:</strong>{willDeliver}</p>
                    </div>
            )
        }
        else {
            console.log(results.error.message)
        }
    }
if(token){
return (
<form id="CreateMessageContainer" onSubmit={(event) => {
    event.preventDefault()
    handleSubmit();
    console.log(willDeliver)
   }}>
       <h1>Create a Post</h1>
       <div>
        {/* Name: */}
       <input
       className='PostInput'
        type='name'
        placeholder='Enter Item Name'
        onChange={(event) => itemTitle(event.target.value)}
        />
        </div>
        <div>
        {/* Description: */}
        <input
        className='PostInput'
        type='description'
        placeholder='Enter Item Description'
        onChange={(event) => itemDescription(event.target.value)}
        />
        </div>
        <div>
        {/* Price:      */}
        <input
        className='PostInput'
        type='price'
        placeholder='Enter Asking Price'
        onChange={(event) => itemPrice(event.target.value)}
        />
        </div>
        <div>
        {/* Location: */}
        {/* <span>  </span> */}
        <input
        className='PostInput'
        type='location'
        placeholder='Enter Location'
        onChange={(event) => itemLocation(event.target.value)}
        />
        <div>
        Available for Delivery?
      <input 
        type='checkbox'
        // checked = "false"
        onChange={(event) => {setWillDeliver(event.target.checked), console.log(willDeliver)}}
      />
      </div>
        </div>
        <Button type='submit' variant='contained' color='success'>Submit</Button>
        <Link to='/Posts'><Button variant='contained' color='success'>Back</Button></Link>
   </form>
)
}
else{
    return(
        <div id='FlexContainer'>
        <h2>Please Login or Register to Begin Posting</h2>
        </div>
    )
}
}

export default CreatePost
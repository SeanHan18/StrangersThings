import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";


const SinglePostView = ({ posts }) => {
    const { id } = useParams();
    const token = window.localStorage.getItem('token')
    const [currentPost] = posts.filter(post => post._id === id)
    const { title, description, location, price, willDeliver } = currentPost;
    let deliveryValue = JSON.stringify(willDeliver)
    console.log(deliveryValue)
    let delivery = ''
    console.log(JSON.stringify(willDeliver))

    if (JSON.stringify(willDeliver) == 'true'){
        delivery = 'Yes'
        console.log("Yes")
    }
    else if (JSON.stringify(willDeliver) == 'false' ){
        delivery = 'No'
        console.log("No")
    }

if (token) {
    return (
        <div id='Post'>
            <h3 id="PostTitle">{title}</h3>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Price:</strong> {price}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Available for Delivery:</strong> {delivery}</p>
            <Link to='/Posts' ><Button variant="contained" color="success">Back</Button></Link>
            
            <Link to='/Message'>
                <Button variant="contained" color="success" onClick={() => { window.localStorage.setItem('ID', id) }}>Send Message</Button>
            </Link>
        </div>
    )
}
else{return (
    <div id='Post'>
        <h3 id="PostTitle">{title}</h3>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Available for Delivery:</strong> {delivery}</p>
        <Link to='/Posts'><Button variant="contained" color="success">Back</Button></Link>
    </div>
)}
}


export default SinglePostView
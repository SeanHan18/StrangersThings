import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const SinglePostView = ({ posts }) => {
    const { id } = useParams();
    const token = window.localStorage.getItem('token')

    const [currentPost] = posts.filter(post => post._id === id)
    const { title, description, location, price, willDeliver } = currentPost;
if (token) {
    return (
        <div>
            <h3>{title}</h3>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Location: {location}</p>
            <p>Will Deliver {willDeliver}</p>
            <Link to='/Posts' ><button>Back</button></Link>
            
            <Link to='/Message'>
                <button onClick={() => { window.localStorage.setItem('ID', id) }}>Send Message</button>
            </Link>
        </div>
    )
}
else{return (
    <div>
        <h3>{title}</h3>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <p>Location: {location}</p>
        <p>Will Deliver {willDeliver}</p>
        <Link to='/Posts' ><button>Back</button></Link>
    </div>
)}
}


export default SinglePostView
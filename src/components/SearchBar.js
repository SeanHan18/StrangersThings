import React from "react";
import { getPosts } from "../api";

const SearchBar = () => {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    async function fetchPosts() {
        const results = await getPosts(token)
        setPosts(results.data.posts);
    }

    fetchPosts()

    function postMatches(post, text) {
        if (post.title.includes(text) || post.description.includes(text) || post.price.includes(text) || post.location.includes(text)) {
            return true
        }
        else {
            return false
        }
    }
    const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
    const postsToDisplay = searchTerm.length ? filteredPosts : posts;

    return (
        <form onSubmit={ (event) => {
            event.preventDefault();
            return(
                postsToDisplay.map(posts)
            )
            
          }}><h1>Search</h1>
          <input
           type='text'
           placeholder='Search'
           onChange={(event) => setSearchTerm(event.target.value)}
           />
           </form>
    )
}

export default SearchBar
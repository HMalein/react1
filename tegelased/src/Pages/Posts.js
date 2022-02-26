import { useState, useEffect } from "react";

function Posts(){
    const [posts, refreshPosts] =useState([]);

    useEffect(() => { fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            return response.json()
        }).then (data => {
            const newArray = [];
            for (const key in data) {
                newArray.push(data[key]);
        }
        refreshPosts(newArray);
    }
    );
    },[])

    return(<div>
        {posts.map(post =>
            <div key={post.title} className ="Posts">
                <div>{post.title}</div>
                <div>{post.body}</div>
                </div>)}
    </div>)
}

export default Posts;
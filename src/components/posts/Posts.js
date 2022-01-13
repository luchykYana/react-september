import {useEffect, useState} from 'react';

import './Posts.css'
import Post from '../post/Post';

export default function Posts() {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, []);

    return (
        <div className={'posts'}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}

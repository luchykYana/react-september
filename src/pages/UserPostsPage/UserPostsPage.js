import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import css from '../../components/Posts/Posts.module.css';

import {postService} from '../../services';
import {Post} from '../../components';

const UserPostsPage = () => {
    const [posts, setPosts] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        postService.getByUserId(id).then(value => setPosts(value.data));
    }, [id]);

    return (
        <div className={css.posts}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPostsPage};

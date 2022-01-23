import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import css from './PostsOfUserPage.module.css';

import {postService} from '../../services';
import {PostOfUser} from '../../components';

const PostsOfUserPage = () => {
    const [posts, setPosts] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        postService.getByUserId(id).then(value => setPosts(value.data));
    }, [id]);

    return (
        <div className={css.postsOfUserPage}>
            {posts.map(post => <PostOfUser key={post.id} post={post}/>)}
        </div>
    );
};

export {PostsOfUserPage};

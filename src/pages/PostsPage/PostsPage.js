import {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import css from './PostsPage.module.css';

import {postService} from '../../services';
import {Post} from '../../components';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value.data));
    }, []);

    return (
        <div className={css.postsPage}>

            <div className={css.posts}>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>

            <div>
                <Outlet/>
            </div>

        </div>
    );
};

export {PostsPage};

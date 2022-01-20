import {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import css from './PostPage.module.css';

import {postService} from '../../services';
import {Posts} from '../../components';

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts(value.data));
    }, []);

    return (
        <div className={css.postPage}>
            <Posts posts={posts}/>
            <Outlet/>
        </div>
    );
};

export {PostsPage};

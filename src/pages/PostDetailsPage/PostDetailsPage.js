import {Outlet, useLocation, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import css from './PostDetailsPage.module.css';

import {postService} from '../../services';
import {PostDetails} from '../../components';

const PostDetailsPage = () => {
    const [post, setPost] = useState({});

    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (state) {
            setPost(state);
            return;
        }

        postService.getById(id).then(value => setPost(value.data));
    }, [id]);

    return (
        <div className={css.postDetails}>
            <PostDetails post={post}/>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};

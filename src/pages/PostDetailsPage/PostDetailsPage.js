import {useEffect, useState} from 'react';
import {useLocation, useParams, Outlet} from 'react-router-dom';

import css from './PostDetailsPage.css';

import {postService} from '../../services';
import {PostDetails} from '../../components';

const PostDetailsPage = () => {
    const [post, setPost] = useState({});

    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if(state){
            setPost(state);
            return;
        }

        postService.getById(id).then(value => setPost(value.data));
    }, [state]);

    return (
        <div className={css.postDetailsPage}>
            <PostDetails post={post}/>
            <Outlet/>
        </div>
    );
};

export {PostDetailsPage};

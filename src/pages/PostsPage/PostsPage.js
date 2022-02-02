import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import css from './PostsPage.module.css';

import {Posts} from '../../components';
import {getAllPostsThunk} from '../../store';

const PostsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPostsThunk());
    }, []);

    return (
        <div className={css.postsPage}>
            <Posts/>
        </div>
    );
};

export {PostsPage};

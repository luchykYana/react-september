import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import css from './CommentsPage.module.css';

import {getAllCommentsThunk} from '../../store';
import {Comments} from '../../components';

const CommentsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCommentsThunk());
    }, []);

    return (
        <div className={css.commentsPage}>
            <Comments/>
        </div>
    );
};

export {CommentsPage};

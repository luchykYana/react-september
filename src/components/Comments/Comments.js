import {useSelector} from 'react-redux';

import css from './Comments.module.css';

import {Comment} from '../Comment/Comment';

const Comments = () => {
    const {comments, status, error} = useSelector(state => state.commentReducer);

    return (
        <div className={css.comments}>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};

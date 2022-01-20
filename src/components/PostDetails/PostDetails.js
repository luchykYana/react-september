import {Link} from 'react-router-dom';

import css from './PostDetails.module.css';

const PostDetails = ({post: {id, userId, title, body}}) => {
    return (
        <div className={css.post}>
            <div>{userId}.{id}. {title}</div>
            <div>{body}</div>
            <Link to={'comments'}>
                <button>Get comments</button>
            </Link>
        </div>
    );
};

export {PostDetails};

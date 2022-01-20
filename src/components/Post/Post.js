import {Link} from 'react-router-dom';

import css from './Post.module.css';

const Post = ({post}) => {
    return (
        <div className={css.post}>
            <div>
                <div>{post.userId}.{post.id}. {post.title}</div>
            </div>

            <div>
                <Link to={post.id.toString()} state={post}>
                    <button>Get details</button>
                </Link>
            </div>

        </div>
    );
};

export {Post};

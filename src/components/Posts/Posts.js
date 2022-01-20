import css from './Posts.module.css';

import {Post} from '../Post/Post';

const Posts = ({posts}) => {
    return (
        <div className={css.posts}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};

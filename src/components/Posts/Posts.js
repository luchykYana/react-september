import {useSelector} from 'react-redux';

import css from './Posts.module.css';

import {Post} from '../Post/Post';

const Posts = () => {
    const {posts, status, error} = useSelector(state => state.postReducer);

    return (
        <div className={css.posts}>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};

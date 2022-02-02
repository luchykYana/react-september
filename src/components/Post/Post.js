import css from './Post.module.css';

const Post = ({post: {id, userId, title, body}}) => {
    return (
        <div className={css.post}>
            <div>{userId}.{id}. {title}</div>
            <div>{body}</div>
        </div>
    );
};

export {Post};

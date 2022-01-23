import css from './PostOfUser.module.css';

const PostOfUser = ({post: {id, userId, title, body}}) => {
    return (
        <div className={css.postOfUser}>
            <div><b>{userId}.{id}. {title}</b></div>
            <div>{body}</div>
        </div>
    );
};

export {PostOfUser};

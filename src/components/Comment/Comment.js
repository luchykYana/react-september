import css from './Comment.module.css';

const Comment = ({comment: {postId, id, name, email, body}}) => {
    return (
        <div className={css.comment}>
            <div>{postId}.{id}. {name}</div>
            <div><b>{email}</b></div>
            <div>{body}</div>
        </div>
    );
};

export {Comment};

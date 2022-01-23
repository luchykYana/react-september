import css from './CommentOfPage.module.css';

const CommentOfPost = ({comment: {id, postId, name, email, body}}) => {
    return (
        <div className={css.commentOfPage}>
            <div><b>{postId}.{id}. {name}</b></div>
            <div><span>email:</span> {email}</div>
            <div>{body}</div>
        </div>
    );
};

export {CommentOfPost};

import css from './Comment.module.css';

const Comment = ({comment: {id, postId, name}}) => {
    return (
        <div className={css.comment}>
            <div>{postId}.{id}. {name}</div>
        </div>
    );
};

export {Comment};

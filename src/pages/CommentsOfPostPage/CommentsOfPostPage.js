import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import css from './CommentsOfPostPage.module.css';

import {commentService} from '../../services';
import {CommentOfPost} from '../../components';

const CommentsOfPostPage = () => {
    const [comments, setComments] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        commentService.getByPostId(id).then(value => setComments(value.data));
    }, [id]);

    return (
        <div className={css.commentsOfPost}>
            {comments.map(comment => <CommentOfPost key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {CommentsOfPostPage};

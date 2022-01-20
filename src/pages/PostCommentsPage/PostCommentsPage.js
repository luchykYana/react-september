import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import {commentService} from '../../services';
import {Comment} from '../../components';

const PostCommentsPage = () => {
    const [comments, setComments] = useState([]);

    const {postId} = useParams();

    useEffect(() => {
        commentService.getByPostId(postId).then(value => setComments(value.data));
    }, [postId]);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {PostCommentsPage};

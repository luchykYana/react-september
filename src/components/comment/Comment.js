import './Comment.css'

export default function Comment({comment: {postId, id, name, email, body}}) {
    return (
        <div className={'comment'}>
            <div><b>{postId}.{id}. {name}</b></div>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    );
}

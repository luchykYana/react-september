import './Post.css'

export default function Post({post: {userId, id, title, body}}) {
    return (
        <div className={'post'}>
            <div><b>{userId}.{id}. {title}</b></div>
            <div>{body}</div>
        </div>
    );
}

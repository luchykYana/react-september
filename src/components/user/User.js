import './User.css'

export default function User({user: {id, name, username}, getUserId}) {
    const getId = () => getUserId(id);

    return (
        <div className={'user'}>
            <div>{id}. {name} {username}</div>
            <button onClick={getId}>Get details</button>
        </div>
    );
}

import './User.css'

export default function User({user: {id, name, username, email}}) {
    return (
        <div className={'user'}>
            {id}. {name} —— {username} —— {email}
        </div>
    );
}

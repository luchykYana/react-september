import css from './User.module.css';

const User = ({user: {id, name, username, email}}) => {
    return (
        <div className={css.user}>
            <div>{id}. {name} {username}</div>
            <div>{email}</div>
        </div>
    );
};

export {User};

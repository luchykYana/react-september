import {Link} from 'react-router-dom';

import css from './User.module.css';

const User = ({user}) => {
    return (
        <div className={css.user}>
            <div>{user.id}. {user.name} {user.username}</div>

            <Link to={user.id.toString()} state={user}>
                <button>User details</button>
            </Link>
        </div>
    );
};

export {User};

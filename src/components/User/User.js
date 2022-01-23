import {Link} from 'react-router-dom';

import css from './User.module.css';

const User = ({user}) => {
    return (
        <div className={css.user}>
            <div>{user.id}. {user.name}</div>

            <div className={css.buttons}>
                <Link to={user.id.toString()} state={user}>
                    <button>User details</button>
                </Link>

                <Link to={`${user.id}/albums`}>
                    <button>User albums</button>
                </Link>
            </div>
        </div>
    );
};

export {User};

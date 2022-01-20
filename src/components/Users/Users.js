import css from './Users.module.css';

import {User} from '../User/User';

const Users = ({users}) => {
    return (
        <div className={css.users}>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
}

export {Users};

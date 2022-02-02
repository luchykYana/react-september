import {useSelector} from 'react-redux';

import css from './Users.module.css';

import {User} from '../User/User';

const Users = () => {
    const {users, status, error} = useSelector(state => state.userReducer);

    return (
        <div className={css.users}>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};

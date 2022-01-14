import {useEffect, useState} from 'react';

import UserForm from '../userForm/UserForm';
import Users from '../users/Users';
import {getUsers} from '../../services/user.service';

export default function UserComponent() {
    let [users, setUsers] = useState([]);
    let [foundUsers, setFoundUsers] = useState(null);
    let [isBegin, setIsBegin] = useState(true);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, []);

    const findUsers = (users) => {
        setFoundUsers(users);
        setIsBegin(false);
    }

    return (
        <div>
            <UserForm users={users} findUsers={findUsers}/>
            {isBegin && <Users users={users}/>}
            {foundUsers && <Users users={foundUsers}/>}
        </div>
    );
}

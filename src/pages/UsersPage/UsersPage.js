import {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import css from './UsersPage.module.css';

import {userService} from '../../services';
import {Users} from '../../components';

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value.data));
    }, []);

    return (
        <div className={css.usersPage}>
            <Users users={users}/>
            <Outlet/>
        </div>
    );
};

export {UsersPage};

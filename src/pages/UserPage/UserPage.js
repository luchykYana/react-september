import {Outlet, useLocation, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import css from './UserPage.module.css';

import {userService} from '../../services';
import {UserDetails} from '../../components';

const UserPage = () => {
    const [user, setUser] = useState({});

    const {state} = useLocation();
    const {id} = useParams();

    useEffect(() => {
        if (state) {
            setUser(state);
            return;
        }

        userService.getById(id).then(value => setUser(value.data));
    }, [id]);

    return (
        <div className={css.userPage}>
            <UserDetails user={user}/>
            <Outlet/>
        </div>
    );
};

export {UserPage};

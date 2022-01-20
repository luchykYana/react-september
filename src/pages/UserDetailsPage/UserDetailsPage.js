import {Outlet, useLocation, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import {UserDetails} from '../../components';
import {userService} from '../../services';

const UserDetailsPage = () => {
    const [user, setUser] = useState({});

    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setUser(state);
            return;
        }

        userService.getById(id).then(value => setUser(value.data));
    }, [state]);

    return (
        <div>
            <UserDetails user={user}/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};

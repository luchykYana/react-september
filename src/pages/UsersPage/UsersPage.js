import {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import css from './UsersPage.module.css';

import {Users} from '../../components';
import {getAllUsersThunk} from '../../store';

const UsersPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsersThunk());
    }, []);

    return (
        <div className={css.usersPage}>
            <Users/>
        </div>
    );
};

export {UsersPage};

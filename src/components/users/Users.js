import React, {useEffect, useState} from 'react';

import {getPostsOfUser, getUser, getUsers} from '../../services/user.service';

import './Users.css'
import User from '../user/User';
import UserDetails from '../user/userDetails/UserDetails';
import Posts from '../posts/Posts';

export default function Users() {
    let [users, setUsers] = useState([]);
    let [user, setUser] = useState(null);
    let [postsOfUser, setPostsOfUser] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, []);

    const getUserId = (id) => {
        getUser(id).then(value => setUser(value.data));
        clearInfo();
    }

    const getUserPosts = (id) => {
        getPostsOfUser(id).then(value => setPostsOfUser(value.data));
    }

    const clearInfo = () => {
        setUser(null);
        setPostsOfUser(null);
    }

    return (
        <div>
            <div className={'usersPage'}>
                <div className={'users'}>
                    {users.map(user => <User key={user.id} user={user} getUserId={getUserId}/>)}
                    <button onClick={clearInfo}>Clear</button>
                </div>
                <div>
                    {user && <UserDetails user={user} getPostsOfUser={getUserPosts}/>}
                </div>
            </div>
            <div>
                {postsOfUser && <Posts posts={postsOfUser}/>}
            </div>
        </div>
    );
}

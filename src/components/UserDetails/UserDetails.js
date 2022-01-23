import {Link} from 'react-router-dom';

import css from './UserDetails.module.css';

const UserDetails = ({user: {id, name, username, email, phone, website}}) => {
    return (
        <div className={css.userDetails}>

            <div>
                <div><b>{id}. {name} {username}</b></div>
                <div><span>email:</span> {email}</div>
                <div><span>phone:</span> {phone}</div>
                <div><span>website:</span> {website}</div>
            </div>

            <div>
                <Link to={'posts'}>
                    <button>Get posts</button>
                </Link>
            </div>

        </div>
    );
};

export {UserDetails};

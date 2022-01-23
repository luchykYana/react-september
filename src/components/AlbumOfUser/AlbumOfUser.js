import {Link} from 'react-router-dom';

import css from './AlbumOfUser.module.css';

const AlbumOfUser = ({album: {id, userId, title}}) => {
    return (
        <div className={css.albumOfUser}>
            <div>{userId}.{id}. {title}</div>

            <Link to={`${id}/photos`}>
                <button>Get photos</button>
            </Link>
        </div>
    );
};

export {AlbumOfUser};

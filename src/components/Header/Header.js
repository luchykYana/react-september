import {Link} from 'react-router-dom';

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <Link to={'/'}>Rick and Morty</Link>
        </div>
    );
};

export {Header};

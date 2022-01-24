import {Link} from 'react-router-dom';

import css from './Episode.module.css';

const Episode = ({episode}) => {
    return (
        <div className={css.episode}>
            <h2><b>{episode.name}</b></h2>
            <div><b>Episode:</b> {episode.episode}</div>
            <div><b>Air_date:</b> {episode.air_date}</div>

            <div>
                <Link to={episode.name.replaceAll(' ', '_')} state={episode}>Episode details</Link>
            </div>
        </div>
    );
};

export {Episode};

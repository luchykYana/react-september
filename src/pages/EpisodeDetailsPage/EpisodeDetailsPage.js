import {useLocation} from 'react-router-dom';

import css from '../EpisodesPage/EpisodesPage.module.css';
import css2 from './EpisodeDetailsPage.module.css';

import {Character} from '../../components';

const EpisodeDetailsPage = () => {
    const {state} = useLocation();

    return (
        <div>
            <div className={css.title}>Characters!</div>

            <div className={css2.header}>
                <div>{state.name} -- {state.episode} -- {state.air_date}</div>
            </div>

            <div className={css2.characters}>
                {state.characters.map(character => <Character key={character} character={character}/>)}
            </div>
        </div>
    );
};

export {EpisodeDetailsPage};

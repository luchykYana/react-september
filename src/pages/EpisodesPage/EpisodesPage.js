import {useEffect, useState} from 'react';

import css from './EpisodesPage.module.css';

import {movieService} from '../../services';
import {Episode} from '../../components';

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        movieService.getEpisodesByPage(page).then(value => setEpisodes(value.data.results));
    }, [page]);

    const pressPrev = (e) => {
        if (page === 2) {
            setPage(1);
            e.target.disabled = true;
        }
        if (page === 3) {
            setPage(2);
            document.getElementById('secondBtn').disabled = false;
        }
        console.log(page);
    };

    const pressNext = (e) => {
        if (page === 1) {
            setPage(2);
            document.getElementById('firstBtn').disabled = false;
            document.getElementById('firstBtn').hidden = false;
        }
        if (page === 2) {
            setPage(3)
            e.target.disabled = true;
        }
    };

    return (
        <div>
            <div className={css.title}>Episodes!</div>

            <div>
                <div className={css.episodes}>
                    {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
                </div>

                <div className={css.buttons}>
                    <button id={'firstBtn'} onClick={pressPrev} hidden>Previous</button>
                    <button id={'secondBtn'} onClick={pressNext}>Next</button>
                </div>
            </div>
        </div>
    );
};

export {EpisodesPage};

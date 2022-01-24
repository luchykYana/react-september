import {Route, Routes} from 'react-router-dom';

import {Layout} from './components';
import {EpisodeDetailsPage, EpisodesPage, NotFoundPage} from './pages';

export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<EpisodesPage/>}/>

                <Route path={':title'} element={<EpisodeDetailsPage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

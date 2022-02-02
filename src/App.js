import {Route, Routes} from 'react-router-dom';

import {Layout} from './components';
import {CarsPage, CommentsPage, NotFoundPage, PostsPage, UsersPage} from './pages';

export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<CarsPage/>}/>

                <Route path={'users'} element={<UsersPage/>}/>

                <Route path={'posts'} element={<PostsPage/>}/>

                <Route path={'comments'} element={<CommentsPage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
}

import {Route, Routes} from 'react-router-dom';

import {Layout} from './components';
import {
    HomePage,
    NotFoundPage,
    PostCommentsPage,
    PostDetailsPage,
    PostsPage,
    UserDetailsPage,
    UserPostsPage,
    UsersPage
} from './pages';

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route index element={<HomePage/>}/>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetailsPage/>}>
                        <Route path={`posts`} element={<UserPostsPage/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':postId'} element={<PostDetailsPage/>}>
                        <Route path={'comments'} element={<PostCommentsPage/>}/>
                    </Route>
                </Route>

                <Route path={'*'} element={<NotFoundPage/>}/>

            </Route>
        </Routes>
    );
};

export default App;

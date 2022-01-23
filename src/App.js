import {Route, Routes} from 'react-router-dom';

import {Layout} from './components';
import {
    AlbumsOfUserPage,
    CommentsOfPostPage,
    HomePage,
    NotFoundPage,
    PhotosOfAlbumPage,
    PostDetailsPage,
    PostsOfUserPage,
    PostsPage,
    UserPage,
    UsersPage
} from './pages';

export default function App() {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route index element={<HomePage/>}/>

                <Route path={'users'} element={<UsersPage/>}>

                    <Route path={':id'} element={<UserPage/>}>
                        <Route path={'posts'} element={<PostsOfUserPage/>}/>
                    </Route>

                    <Route path={':id/albums'} element={<AlbumsOfUserPage/>}>
                        <Route path={':albumId/photos'} element={<PhotosOfAlbumPage/>}/>
                    </Route>

                </Route>

                <Route path={'posts'} element={<PostsPage/>}>

                    <Route path={':id'} element={<PostDetailsPage/>}>
                        <Route path={'comments'} element={<CommentsOfPostPage/>}/>
                    </Route>

                </Route>

                <Route path={'*'} element={<NotFoundPage/>}/>

            </Route>
        </Routes>
    );
};

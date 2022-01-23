import {Outlet, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import css from './AlbumsOfUserPage.module.css';

import {albumService} from '../../services';
import {AlbumOfUser} from '../../components';

const AlbumsOfUserPage = () => {
    const [albums, setAlbums] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        albumService.getByUserId(id).then(value => setAlbums(value.data));
    }, [id]);

    return (
        <div className={css.albumsOfUserPage}>
            {albums.map(album => <AlbumOfUser key={album.id} album={album}/>)}
            <Outlet/>
        </div>
    );
};

export {AlbumsOfUserPage};

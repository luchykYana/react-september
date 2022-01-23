import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import css from './PhotosOfAlbumPage.module.css';

import {photoService} from '../../services';
import {PhotoOfAlbum} from '../../components';

const PhotosOfAlbumPage = () => {
    const [photos, setPhotos] = useState([]);

    const {albumId} = useParams();

    useEffect(() => {
        photoService.getByAlbumId(albumId).then(value => setPhotos(value.data));
    }, [albumId]);

    return (
        <div className={css.photosOfAlbumPage}>
            {photos.map(photo => <PhotoOfAlbum key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {PhotosOfAlbumPage};

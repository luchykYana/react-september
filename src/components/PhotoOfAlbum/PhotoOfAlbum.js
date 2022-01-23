import css from './PhotoOfAlbum.module.css';

const PhotoOfAlbum = ({photo: {id, albumId, title, thumbnailUrl}}) => {
    return (
        <div className={css.photoOfAlbum}>
            <div>
                <div>{albumId}.{id}. {title}</div>
            </div>

            <div>
                <img src={thumbnailUrl} alt={title}/>
            </div>
        </div>
    );
};

export {PhotoOfAlbum};

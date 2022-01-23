import {axiosService} from './axois.service';
import {urls} from '../configs';

const {albums, photos} = urls;

export const photoService = {
    getByAlbumId: (id) => axiosService.get(`${albums}/${id}${photos}`)
};

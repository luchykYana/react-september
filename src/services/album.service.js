import {axiosService} from './axois.service';
import {urls} from '../configs';

const {users, albums} = urls;

export const albumService = {
    getByUserId: (id) => axiosService.get(`${users}/${id}${albums}`)
};

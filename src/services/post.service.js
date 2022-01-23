import {axiosService} from './axois.service';
import {urls} from '../configs';

const {users, posts} = urls;

export const postService = {
    getAll: () => axiosService.get(posts),
    getById: (id) => axiosService.get(`${posts}/${id}`),
    getByUserId: (id) => axiosService.get(`${users}/${id}${posts}`)
};

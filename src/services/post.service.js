import {axiosService} from './axios.service';
import {urls} from '../configs/urls';

export const postService = {
    getAll: () => axiosService.get(urls.posts),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`),
    getByUserId: (id) => axiosService.get(`${urls.posts}?userId=${id}`)
}

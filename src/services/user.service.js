import {axiosService} from './axois.service';
import {urls} from '../configs';

const {users} = urls;

export const userService = {
    getAll: () => axiosService.get(users),
    getById: (id) => axiosService.get(`${users}/${id}`)
};

import {axiosService} from './axois.service';
import {urls} from '../configs';

const {comments, posts} = urls;

export const commentService = {
    getAll: () => axiosService.get(comments),
    getByPostId: (id) => axiosService.get(`${posts}/${id}${comments}`)
};

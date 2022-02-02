import {axiosService} from './axios.service';
import {userURL} from '../configs';

const {userAxiosService} = axiosService;
const {users, posts, comments} = userURL;

export const userService = {
    getAllUsers: () => userAxiosService.get(users),
    getAllPosts: () => userAxiosService.get(posts),
    getAllComments: () => userAxiosService.get(comments)
}

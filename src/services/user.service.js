import axios from 'axios';

import {urls} from '../config/user.url';

const axiosInstance = axios.create({
    baseURL: urls.baseUrl,
    headers: {}
});

const getUsers = () => axiosInstance.get(urls.users);

const getUser = (id) => axiosInstance.get(urls.users + id);

const getPostsOfUser = (id) => axiosInstance.get(urls.users + id + '/posts');

export {
    getUser,
    getUsers,
    getPostsOfUser
};

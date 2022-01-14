import axios from 'axios';

import {url} from '../configs/user.url';

const axiosInstance = axios.create({
    baseURL: url.baseURL,
    headers: {}
});

const getUsers = () => axiosInstance.get(url.users);

export {
    getUsers
};

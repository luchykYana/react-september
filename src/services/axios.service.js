import axios from 'axios';

import {carURL, userURL} from '../configs';

const carAxiosService = axios.create({
    baseURL: carURL.baseURL
});

const userAxiosService = axios.create({
    baseURL: userURL.baseURL
});

export const axiosService = {
    carAxiosService,
    userAxiosService
}

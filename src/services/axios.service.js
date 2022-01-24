import axios from 'axios';

import {urls} from '../configs';

export const axiosService = axios.create({
    baseURL: urls.baseURL
});

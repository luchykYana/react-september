import axios from 'axios';
import {urls} from '../configs/urls';

export const axiosService = axios.create({
    baseURL: urls.baseURL
});

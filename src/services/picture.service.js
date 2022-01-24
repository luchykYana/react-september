import {axiosService} from './axios.service';

export const pictureService = {
    getPicture: (endpoint) => axiosService.get(endpoint)
}

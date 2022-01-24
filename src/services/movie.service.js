import {axiosService} from './axios.service';

import {urls} from '../configs';

const {episode, character, location} = urls;

export const movieService = {
    getEpisodesByPage: (page) => axiosService.get(`${episode}?page=${page}`),
    getCharacters: () => axiosService.get(character),
    getLocations: () => axiosService.get(location)
}

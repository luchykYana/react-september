import axios from 'axios';

const axiosService = axios.create({baseURL: ''});

export const characterService = {
    getCharacter: (path) => axiosService.get(path)
}

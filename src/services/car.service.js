import axiosCarService from './axios.car.service';

import {urls} from '../configs/urls';

export const carService = {
    create: (car) => axiosCarService.post(urls.cars, car),

    getAll: () => axiosCarService.get(urls.cars),

    updateById: (id, car) => axiosCarService.patch(`${urls.cars}/${id}`, car),

    deleteById: (id) => axiosCarService.delete(`${urls.cars}/${id}`)
}

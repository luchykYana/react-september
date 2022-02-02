import {axiosService} from './axios.service';
import {carURL} from '../configs';

const {carAxiosService} = axiosService;
const {cars} = carURL;

export const carService = {
    create: (car) => carAxiosService.post(cars, car).then(value => value.data),

    getAll: () => carAxiosService.get(cars),

    updateById: (id, car) => carAxiosService.patch(`${cars}/${id}`, car),

    deleteById: (id) => carAxiosService.delete(`${cars}/${id}`)
}

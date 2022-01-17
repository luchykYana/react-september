import {carService} from '../../services/car.service';
import './Car.css';

export default function Car({car, update, updateCar}) {
    const deleteCar = async () => {
        try {
            await carService.deleteById(id);

            update(id);
        } catch (e) {
            console.log(e.response.data);
        }
    }

    const updateCarById = () => {
        window.scrollTo(0, 0);
        updateCar(car);
    }

    const {id, model, price, year} = car;

    return (
        <div className={'car'}>
            <div className={'content'}>
                <div><b>{id}</b>. {model}</div>
                <div>price: {price}</div>
                <div>year: {year}</div>
            </div>
            <div className={'buttons'}>
                <button onClick={deleteCar}>Delete</button>
                <button onClick={updateCarById}>Update</button>
            </div>
        </div>
    );
}

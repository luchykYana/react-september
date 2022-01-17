import Car from '../car/Car';
import './Cars.css';

export default function Cars({cars, update, updateCar}) {
    return (
        <div className={'cars'}>
            {cars.map(car => <Car key={car.id} car={car} update={update} updateCar={updateCar}/>)}
        </div>
    );
}

import {useEffect, useState} from 'react';

import CarForm from '../carForm/CarForm';
import Cars from '../cars/Cars';
import {carService} from '../../services/car.service';

export default function CarComponent() {
    let [cars, setCars] = useState([]);
    let [trigger, setTrigger] = useState(null);
    let [updatedCar, setUpdatedCar] = useState({});
    let [buttonTrigger, setButtonTrigger] = useState(null);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value.data]));
    }, [trigger])

    const updatePage = data => {
        setTrigger(data);
    }

    const updateCar = (car) => {
        setUpdatedCar(car);
        setButtonTrigger(1);
    }

    return (
        <div>
            <CarForm update={updatePage}
                     buttonTrigger={buttonTrigger}
                     setButtonTrigger={setButtonTrigger}
                     updatedCar={updatedCar}
            />
            <Cars cars={cars} update={updatePage} updateCar={updateCar}/>
        </div>
    );
}

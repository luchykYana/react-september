import {useForm} from 'react-hook-form';
import {useEffect, useState} from 'react';
import {joiResolver} from '@hookform/resolvers/joi';

import {carService} from '../../services/car.service';
import {CarValidator} from '../../validators/car.validator';
import './CarForm.css';

export default function CarForm({update, buttonTrigger, setButtonTrigger, updatedCar}) {
    let [formError, setFormError] = useState({});

    const {
        register, handleSubmit, watch, formState: {errors}, setValue
    } = useForm({resolver: joiResolver(CarValidator), mode: 'onTouched'});

    useEffect(() => {
        setValue('model', updatedCar.model);
        setValue('price', updatedCar.price);
        setValue('year', updatedCar.year);
    }, [buttonTrigger]);

    const submit = async (car) => {
        try {
            let newCar;

            if (!buttonTrigger) {
                newCar = await carService.create(car);

            } else {
                newCar = await carService.updateById(updatedCar.id, car).then(value => console.log(value.data));

                setButtonTrigger(null);
            }

            update(newCar);
        } catch (e) {
            setFormError(e.response.data);
        }
    }

    return (
        <form onSubmit={handleSubmit(submit)} className={'form'}>
            <div className={'d-block'}>
                <label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
                <hr/>
                {errors.model && <span>{errors.model.message}</span>}
            </div>
            <div className={'d-block'}>
                <label>Price: <input type="text" defaultValue={''} {...register('price')}/></label>
                <hr/>
                {errors.price && <span>{errors.price.message}</span>}
            </div>
            <div className={'d-block'}>
                <label>Year: <input type="text" defaultValue={''} {...register('year')}/></label>
                <hr/>
                {errors.year && <span>{errors.year.message}</span>}
            </div>
            <button>Save car</button>
        </form>
    );
}

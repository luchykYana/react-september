import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';

import css from './CarForm.module.css';

import {createCarThunk, updateCarThunk} from '../../store';
import {CarValidator} from '../../validators';

const CarForm = () => {
    const {carForUpdate} = useSelector(state => state.carReducer);

    const {
        handleSubmit,
        register,
        formState: {errors},
        setValue,
        reset
    } = useForm({resolver: joiResolver(CarValidator), mode: 'onTouched'});

    const dispatch = useDispatch();

    const submit = (data) => {
        if (carForUpdate) {
            dispatch(updateCarThunk({id: carForUpdate.id, car: data}));
        } else {
            dispatch(createCarThunk(data));
        }
        reset();
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate]);

    return (
        <form onSubmit={handleSubmit(submit)} className={css.form}>
            <div className={css.item}><label>Model: <input type="text"
                                                           defaultValue={''} {...register('model')}/></label>
                <div>{errors.model?.message}</div>
            </div>

            <div className={css.item}><label>Price: <input type="text"
                                                           defaultValue={''} {...register('price')}/></label>
                <div>{errors.price?.message}</div>
            </div>

            <div className={css.item}><label>Year: <input type="text" defaultValue={''} {...register('year')}/></label>
                <div>{errors.year?.message}</div>
            </div>

            <button>Save</button>
        </form>
    );
};

export {CarForm};

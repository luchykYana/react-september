import {useDispatch} from 'react-redux';

import css from './Car.module.css';

import {carActions, deleteCarThunk} from '../../store';

const Car = ({car}) => {
    const {id, model, price, year} = car;

    const dispatch = useDispatch();

    return (
        <div className={css.car}>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => dispatch(deleteCarThunk({id}))}>Delete</button>
            <button onClick={() => dispatch(carActions.carToUpdate({car}))}>Update</button>
        </div>
    );
};

export {Car};

import css from './CarsPage.module.css';

import {CarForm, Cars} from '../../components';

const CarsPage = () => {
    return (
        <div className={css.carPage}>
            <CarForm/>
            <Cars/>
        </div>
    );
};

export {CarsPage};

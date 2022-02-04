import {useSelector} from 'react-redux';

import css from './Results.module.css';

const Results = () => {
    const {all, completed} = useSelector(state => state.todoReducer);

    return (
        <div className={css.results}>
            <div>All: {all}</div>
            <div>Completed: {completed}</div>
        </div>
    );
};

export {Results};

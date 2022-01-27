import {useReducer} from 'react';

import css from './Counter.module.css';
import reduceCounter from '../../reduce';

const Counter = () => {
    const [state, dispatch] = useReducer(reduceCounter, {count: 0});

    return (
        <div className={css.counter}>
            <div className={css.state}>{state.count}</div>
            <div>
                <button onClick={() => dispatch({type: 'inc'})}>Inc</button>
                <button onClick={() => dispatch({type: 'dec'})}>Dec</button>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
        </div>
    );
};

export {Counter};

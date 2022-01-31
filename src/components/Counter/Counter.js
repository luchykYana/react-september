import {useReducer} from 'react';

import css from './Counter.module.css';
import reduceCounter from '../../reduce';

const Counter = () => {
    const [state, dispatch] = useReducer(reduceCounter, {count1: 0, count2: 0, count3: 0});

    return (
        <div className={css.main}>
            <div className={css.counter}>
                <div className={css.state}>{state.count1}</div>
                <div>
                    <button onClick={() => dispatch({type: 'inc1'})}>Inc</button>
                    <button onClick={() => dispatch({type: 'dec1'})}>Dec</button>
                    <button onClick={() => dispatch({type: 'reset1'})}>Reset</button>
                </div>
            </div>

            <div className={css.counter}>
                <div className={css.state}>{state.count2}</div>
                <div>
                    <button onClick={() => dispatch({type: 'inc2'})}>Inc</button>
                    <button onClick={() => dispatch({type: 'dec2'})}>Dec</button>
                    <button onClick={() => dispatch({type: 'reset2'})}>Reset</button>
                </div>
            </div>

            <div className={css.counter}>
                <div className={css.state}>{state.count3}</div>
                <div>
                    <button onClick={() => dispatch({type: 'inc3'})}>Inc</button>
                    <button onClick={() => dispatch({type: 'dec3'})}>Dec</button>
                    <button onClick={() => dispatch({type: 'reset3'})}>Reset</button>
                </div>
            </div>
        </div>
    );
};

export {Counter};

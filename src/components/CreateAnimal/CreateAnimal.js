import {useReducer} from 'react';

import reduceAnimal from '../../reducer';
import css from './CreateAnimal.module.css';

import {DeleteAnimal} from '../DeleteAnimal/DeleteAnimal';

const CreateAnimal = ({species}) => {
    const [state, dispatch] = useReducer(reduceAnimal);

    const submit = (e) => {
        e.preventDefault();

        if (e.target.name.value.trim() === '') {
            return;
        }

        dispatch({
            type: 'create',
            payload: {id: new Date().getMilliseconds() * new Date().getMinutes(), name: e.target.name.value}
        });

        e.target.name.value = '';
    }

    return (
        <div>
            <div className={css.type}>
                <div>Add {species}:</div>
                <form onSubmit={submit} className={css.type}>
                    <input type="text" name={'name'}/>
                    <button>Save</button>
                </form>
            </div>

            {
                state && state.animals.map((animal) => <DeleteAnimal
                    key={animal.id}
                    animal={animal}
                    dispatch={dispatch}/>)
            }
        </div>
    );
};

export {CreateAnimal};

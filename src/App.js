import css from './App.module.css';

import {CreateAnimal} from './components'
import {animals} from './configs';
import {useReducer} from 'react';
import reduceAnimal from './reducer';

const {cat, dog, createCat, createDog, deleteCat, deleteDog} = animals;

export default function App() {
    const [state, dispatch] = useReducer(reduceAnimal);

    return (
        <div className={css.animals}>
            <CreateAnimal
                species={cat}
                state={state}
                dispatch={dispatch}
                createA={createCat}
                deleteA={deleteCat}/>

            <CreateAnimal
                species={dog}
                state={state}
                dispatch={dispatch}
                createA={createDog}
                deleteA={deleteDog}/>
        </div>
    );
}

import css from './CreateAnimal.module.css';

import {DeleteAnimal} from '../DeleteAnimal/DeleteAnimal';

const CreateAnimal = ({species, state, dispatch, createA, deleteA}) => {

    const submit = (e) => {
        e.preventDefault();

        if (e.target.name.value.trim() === '') {
            return;
        }

        dispatch({
            type: createA,
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
                species === 'cat' && state && state.cats.map((animal) => <DeleteAnimal
                    key={animal.id}
                    animal={animal}
                    dispatch={dispatch}
                    deleteA={deleteA}
                />)
            }

            {
                species === 'dog' && state && state.dogs.map((animal) => <DeleteAnimal
                    key={animal.id}
                    animal={animal}
                    dispatch={dispatch}
                    deleteA={deleteA}
                />)
            }
        </div>
    );
};

export {CreateAnimal};

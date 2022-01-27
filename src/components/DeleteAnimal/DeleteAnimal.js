import css from './DeleteAnimal.module.css';

const DeleteAnimal = ({animal, dispatch}) => {
    return (
        <div className={css.delete}>
            <div>{animal.name}</div>
            <button onClick={() => dispatch({type: 'delete', payload: animal})}>Delete</button>
        </div>
    );
};

export {DeleteAnimal};

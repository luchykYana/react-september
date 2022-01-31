import css from './DeleteAnimal.module.css';

const DeleteAnimal = ({animal, dispatch, deleteA}) => {
    return (
        <div className={css.delete}>
            <div>{animal.name}</div>
            <button onClick={() => dispatch({type: deleteA, payload: animal})}>Delete</button>
        </div>
    );
};

export {DeleteAnimal};

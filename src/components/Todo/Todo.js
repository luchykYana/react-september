import {useDispatch} from 'react-redux';

import css from './Todo.module.css';

import {todoActions} from '../../store';

const {deleteTodo, changeStatus} = todoActions;

const Todo = ({todo: {id, name, status}}) => {
    const dispatch = useDispatch();

    return (
        <div className={css.todo}>
            <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
            <div className={status ? css.completed : ''}>{name}</div>
            <button onClick={() => dispatch(deleteTodo({id}))}>X</button>
        </div>
    );
};

export {Todo};

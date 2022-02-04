import {useSelector} from 'react-redux';

import css from './Todos.module.css';

import {Todo} from '../Todo/Todo';

const Todos = () => {
    const {todos} = useSelector(state => state.todoReducer);

    return (
        <div className={css.todos}>
            {todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};

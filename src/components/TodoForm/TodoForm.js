import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {joiResolver} from "@hookform/resolvers/joi";

import css from './TodoForm.module.css';

import {todoActions} from '../../store';
import {todoValidator} from '../../validators';

const {addTodo} = todoActions;

const TodoForm = () => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: joiResolver(todoValidator),
        mode: 'onTouched'
    });

    const dispatch = useDispatch();

    const submit = ({todo}) => {
        dispatch(addTodo({todo}));
        reset();
    };

    return (
        <div className={css.form}>
            <form onSubmit={handleSubmit(submit)} className={css.todoForm}>
                <input type="text" defaultValue={''} {...register('todo')} placeholder={'To do:'}/>
                <button>Add</button>
            </form>

            {errors.todo && <div className={css.error}>{errors.todo?.message}</div>}
        </div>
    );
};

export {TodoForm};

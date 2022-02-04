import css from './App.module.css';

import {Results, TodoForm, Todos} from './components';

export default function App() {
    return (
        <div className={css.main}>
            <Results/>
            <TodoForm/>
            <Todos/>
        </div>
    );
}

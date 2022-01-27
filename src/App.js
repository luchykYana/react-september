import css from './App.module.css';

import {Counter} from './components';

export default function App() {
    return (
        <div className={css.main}>
            <Counter/>
            <Counter/>
            <Counter/>
        </div>
    );
}

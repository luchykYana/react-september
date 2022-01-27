import css from './App.module.css';

import {CreateAnimal} from './components'
import {animals} from './configs';

export default function App() {
    return (
        <div className={css.animals}>
            <CreateAnimal species={animals.cat}/>
            <CreateAnimal species={animals.dog}/>
        </div>
    );
}

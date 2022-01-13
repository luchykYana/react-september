import {useEffect, useState} from 'react';

import './Spaceships.css'
import Spaceship from '../spaceship/Spaceship';

export default function Spaceships() {
    let [spaceships, setSpaceships] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setSpaceships(value))
    }, []);

    return (
        <div className={'spaceships'}>
            {
                spaceships
                    .filter(spaceship => spaceship.launch_year !== '2020')
                    .map(spaceship => <Spaceship key={spaceship.mission_name} spaceship={spaceship}/>)
            }
        </div>
    );
}

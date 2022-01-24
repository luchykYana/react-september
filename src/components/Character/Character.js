import {useEffect, useState} from 'react';

import css from './Character.module.css';

import {characterService} from '../../services';

const Character = ({character}) => {
    const [person, setPerson] = useState({});

    useEffect(() => {
        characterService.getCharacter(character).then(value => setPerson(value.data));
    }, [character]);

    const {image, name, status, species, gender, origin, location} = person;

    return (
        <div className={css.person}>
            <img src={image} alt={name}/>

            <div>
                <div><b>Name:</b> {name}</div>
                <div><b>Status:</b> {status}</div>
                <div><b>Species:</b> {species}</div>
                <div><b>Gender:</b> {gender}</div>
                <div><b>Origin:</b> {origin?.name}</div>
                <div><b>Location:</b> {location?.name}</div>
            </div>

        </div>
    );
};

export {Character};

import {useState} from 'react';

import './UserForm.css'

export default function UserForm({users, findUsers}) {
    let [formState, setFormState] = useState({name: '', username: '', email: ''});

    const onClick = (e) => {
        e.preventDefault();

        if (formState.name === '' && formState.username === '' && formState.email === '') {
            return;
        }

        const array = users.filter(user => {
            if (user.name.toLowerCase().includes(formState.name) &&
                user.username.toLowerCase().includes(formState.username) &&
                user.email.toLowerCase().includes(formState.email)
            ) {
                return user;
            }
        })

        if (array) {
            findUsers(array);
        }
    }

    const onChange = (e) => setFormState({...formState, [e.target.name]: e.target.value});

    return (
        <form onSubmit={onClick} className={'form'}>
            <input type="text" name={'name'} onChange={onChange}/>
            <input type="text" name={'username'} onChange={onChange}/>
            <input type="text" name={'email'} onChange={onChange}/>
            <button>Find</button>
        </form>
    );
}

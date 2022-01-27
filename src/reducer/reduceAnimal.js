const initialState = {animals: []};

const reduceAnimal = (state = initialState, action) => {
    switch (action.type) {
        case 'create':
            return {...state, animals: [...state.animals, action.payload]};
        case 'delete':
            const filteredMas = state.animals.filter(item => item.id !== action.payload.id);

            return {...state, animals: filteredMas};
        default:
            return state;
    }
}

export default reduceAnimal;

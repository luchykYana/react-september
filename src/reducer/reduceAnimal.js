const initialState = {cats: [], dogs: []};

const reduceAnimal = (state = initialState, action) => {
    switch (action.type) {
        case 'createCat':
            return {...state, cats: [...state.cats, action.payload]};
        case 'deleteCat':
            const filteredCats = state.cats.filter(item => item.id !== action.payload.id);

            return {...state, cats: filteredCats};
        case 'createDog':
            return {...state, dogs: [...state.dogs, action.payload]};
        case 'deleteDog':
            const filteredDogs = state.dogs.filter(item => item.id !== action.payload.id);

            return {...state, dogs: filteredDogs};
        default:
            return state;
    }
}

export default reduceAnimal;

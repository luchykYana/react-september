const reduceCounter = (state, action) => {
    switch (action.type) {
        case 'inc1':
            return {...state, count1: state.count1 + 1};
        case 'dec1':
            return {...state, count1: state.count1 - 1};
        case 'reset1':
            return {...state, count1: 0};
        case 'inc2':
            return {...state, count2: state.count2 + 1};
        case 'dec2':
            return {...state, count2: state.count2 - 1};
        case 'reset2':
            return {...state, count2: 0};
        case 'inc3':
            return {...state, count3: state.count3 + 1};
        case 'dec3':
            return {...state, count3: state.count3 - 1};
        case 'reset3':
            return {...state, count3: 0};
        default:
            return state;
    }
}

export default reduceCounter;

export  function reducer(state, action) {
    switch(action.type) {
        case 'number_add2':
            return{...state, number: state.number + 2}
        case 'login':
            return{...state, user: {name: action.payload}}
        case 'number_multi7':
            return{...state, number: state.number * 7}
        case 'number_div25':
            return{...state, number: state.number / 25}
        case 'number_toInt':
            return{...state, number: parseInt(state.number)}
        case 'number_addN':
            return{...state, number: state.number + action.payload}
        default:
            return state
    }
}
import { ADD_BUSINESS } from '../constants/action-types'; 

const initialState = {
    business: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUSINESS:
        return Object.assign({}, state, {
            business: action.payload
        })

        default:
        return state;
    }
}

export default rootReducer;
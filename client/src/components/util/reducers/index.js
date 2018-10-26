import { ADD_BUSINESS } from '../constants/action-types'; 

const initialState = {
    businesses: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUSINESS:
        return { ...state, businesses: [...state.businesses, action.payload] };;

        
        // return Object.assign({}, state, { for objects ^^^ for arrays
        //     business: action.payload
        // })

        default:
        return state;
    }
}

export default rootReducer;
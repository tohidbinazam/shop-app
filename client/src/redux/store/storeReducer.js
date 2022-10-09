import initialState from "./initialState";
import { ALL_STORES } from "./type";


const storeReducer = ( state = initialState, { type, payload }) => {

    switch (type) {
        case ALL_STORES:
            return{
                ...state,
                stores: payload
            }
    
        default:
            return state
    }

}


export default storeReducer
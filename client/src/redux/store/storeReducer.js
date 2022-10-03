import initialState from "./initialState";
import { ALL_STORE } from "./type";


const storeReducer = ( state = initialState, { type, payload }) => {

    switch (type) {
        case ALL_STORE:
            return{
                ...state,
                data: payload
            }
    
        default:
            return state
    }

}


export default storeReducer
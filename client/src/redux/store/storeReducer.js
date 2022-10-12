import initialState from "./initialState";
import { ALL_STORES, MODAL_HIDE, MODAL_SHOW, SINGLE_STORE } from "./type";


const storeReducer = ( state = initialState, { type, payload }) => {

    switch (type) {
        case MODAL_SHOW:
            return{
                ...state,
                modal: true,
            }
        case MODAL_HIDE:
            return{
                ...state,
                modal: false,
                store: ''
            }
        case ALL_STORES:
            return{
                ...state,
                stores: payload,
            }
        case SINGLE_STORE:
            return{
                ...state,
                store: payload
            }
    
        default:
            return state
    }

}


export default storeReducer
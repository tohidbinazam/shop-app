import initialState from "./initialState";
import { ALL_STORES, MODAL_HIDE, MODAL_SHOW, SINGLE_STORE, SKELETON_END, SKELETON_START } from "./type";


const storeReducer = ( state = initialState, { type, payload }) => {

    switch (type) {
        case SKELETON_START:
            return{
                ...state,
                skeleton: {
                    status: true,
                    row : 7,
                    col : 6,
                    img : true,
                    button : 2
                }
            }
        case SKELETON_END:
            return{
                ...state,
                skeleton: {
                    status : false
                }
            }
        case MODAL_SHOW:
            return{
                ...state,
                modal: true
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
                stores: payload
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
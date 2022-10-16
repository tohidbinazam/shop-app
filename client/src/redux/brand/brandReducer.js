import initialState from "./initialState";
import { ALL_BRANDS, MODAL_HIDE, MODAL_SHOW, SINGLE_BRAND, SKELETON_END, SKELETON_START } from "./type";


const brandReducer = ( state = initialState, { type, payload }) => {

    switch (type) {
        case SKELETON_START:
            return{
                ...state,
                skeleton: {
                    status: true,
                    row : 7,
                    col : 5,
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
                brand: ''
            }
        case ALL_BRANDS:
            return{
                ...state,
                brands: payload
            }
        case SINGLE_BRAND:
            return{
                ...state,
                brand: payload
            }
        default:
            return state
    }

}


export default brandReducer
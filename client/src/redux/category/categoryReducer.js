import initialState from "./initialState";
import { ALL_CATEGORIES, MODAL_HIDE, MODAL_SHOW, SINGLE_CATEGORY, SKELETON_END, SKELETON_START } from "./type";


const categoryReducer = ( state = initialState, { type, payload }) => {

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
                category: ''
            }
        case ALL_CATEGORIES:
            return{
                ...state,
                categories: payload
            }
        case SINGLE_CATEGORY:
            return{
                ...state,
                category: payload
            }
        default:
            return state
    }

}


export default categoryReducer
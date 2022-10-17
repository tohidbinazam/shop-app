import initialState from "./initialState";
import { ALL_TAGS, MODAL_HIDE, MODAL_SHOW, SINGLE_TAG, SKELETON_END, SKELETON_START } from "./type";


const tagReducer = ( state = initialState, { type, payload }) => {

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
                tag: ''
            }
        case ALL_TAGS:
            return{
                ...state,
                tags: payload
            }
        case SINGLE_TAG:
            return{
                ...state,
                tag: payload
            }
        default:
            return state
    }

}


export default tagReducer
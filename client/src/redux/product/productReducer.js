import initialState from "./initialState";
import { ADD_HIDE, ADD_SHOW, ALL_PRODUCTS, EDIT_HIDE, EDIT_SHOW, QUICK_HIDE, QUICK_SHOW, SINGLE_PRODUCT, SKELETON_END, SKELETON_START } from "./type";


const productReducer = ( state = initialState, { type, payload }) => {

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
        case ADD_SHOW:
            return{
                ...state,
                add_modal: true
            }
        case ADD_HIDE:
            return{
                ...state,
                add_modal: false
            }
        case EDIT_SHOW:
            return{
                ...state,
                edit_modal: true
            }
        case EDIT_HIDE:
            return{
                ...state,
                edit_modal: false
            }
        case QUICK_SHOW:
            return{
                ...state,
                quick_view: true
            }
        case QUICK_HIDE:
            return{
                ...state,
                quick_view: false
            }
        case ALL_PRODUCTS:
            return{
                ...state,
                products: payload
            }
        case SINGLE_PRODUCT:
            return{
                ...state,
                single_product: payload
            }
        default:
            return state
    }

}


export default productReducer
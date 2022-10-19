import initialState from "./initialState";
import { ALL_PRODUCTS, MODAL_HIDE, MODAL_SHOW, PRODUCT_INPUT, SINGLE_PRODUCT, SKELETON_END, SKELETON_START } from "./type";


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
        case MODAL_SHOW:
            return{
                ...state,
                modal: true,
                input: {
                    tag: [],
                    store: []
                }
            }
        case MODAL_HIDE:
            return{
                ...state,
                modal: false,
                single_product: '',
                input: ''
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
        case PRODUCT_INPUT:
            return{
                ...state,
                input: payload
            }
        default:
            return state
    }

}


export default productReducer
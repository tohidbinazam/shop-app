import quickViewModal from "./modal/quickViewModal";
import { combineReducers } from "redux"


const rootReducer = combineReducers({
    product_modal: quickViewModal
})

export default rootReducer
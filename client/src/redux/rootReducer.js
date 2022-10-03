import quickViewModal from "./modal/quickViewModal";
import { combineReducers } from "redux"
import storeReducer from "./store/storeReducer";


const rootReducer = combineReducers({
    product_modal: quickViewModal,
    store : storeReducer
})

export default rootReducer
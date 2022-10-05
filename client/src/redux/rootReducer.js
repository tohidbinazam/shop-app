import quickViewModal from "./modal/quickViewModal";
import { combineReducers } from "redux"
import storeReducer from "./store/storeReducer";
import loadingBarReducer from "./loading-bar/loadingBarReducer";


const rootReducer = combineReducers({
    product_modal: quickViewModal,
    store : storeReducer,
    progress : loadingBarReducer
})

export default rootReducer
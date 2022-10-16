import quickViewModal from "./modal/quickViewModal";
import { combineReducers } from "redux"
import storeReducer from "./store/storeReducer";
import loadingBarReducer from "./loading-bar/loadingBarReducer";
import brandReducer from "./brand/brandReducer";


const rootReducer = combineReducers({
    product_modal: quickViewModal,
    progress : loadingBarReducer,
    brand : brandReducer,
    store : storeReducer,
})

export default rootReducer